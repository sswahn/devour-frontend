
import { FFmpeg } from '@ffmpeg/ffmpeg'
import { fetchFile, toBlobURL } from '@ffmpeg/util'

let ffmpegInstance
let loadPromise

const OUTPUT_WIDTH = 1920
const OUTPUT_HEIGHT = 1080
const OUTPUT_FPS = 30

async function getFFmpeg() {
  if (ffmpegInstance) return ffmpegInstance

  // Prevent multiple simultaneous initialization attempts.
  if (!loadPromise) {
    loadPromise = (async () => {
      const ffmpeg = new FFmpeg()
      const baseURL =
        'https://unpkg.com/@ffmpeg/core@0.12.10/dist/umd'

      await ffmpeg.load({
        coreURL: await toBlobURL(
          `${baseURL}/ffmpeg-core.js`,
          'text/javascript'
        ),
        wasmURL: await toBlobURL(
          `${baseURL}/ffmpeg-core.wasm`,
          'application/wasm'
        )
      })

      ffmpegInstance = ffmpeg
      return ffmpeg
    })().catch(error => {
      loadPromise = null
      throw error
    })
  }

  return loadPromise
}

/**
 * Combines recorded clips into one normalized MP4.
 *
 * @param {Array} clips
 * @param {Object} options
 * @param {Function} options.onProgress
 * @param {number} options.width
 * @param {number} options.height
 * @param {number} options.fps
 * @returns {Promise<Blob>}
 */
export async function concatenateVideos(
  clips,
  {
    onProgress = () => {},
    width = OUTPUT_WIDTH,
    height = OUTPUT_HEIGHT,
    fps = OUTPUT_FPS
  } = {}
) {
  if (!Array.isArray(clips) || clips.length === 0) {
    throw new TypeError('concatenateVideos: clips must be a non-empty array.')
  }

  if (
    !Number.isInteger(width) || width < 2 ||
    !Number.isInteger(height) || height < 2 ||
    !Number.isInteger(fps) || fps < 1
  ) {
    throw new TypeError('concatenateVideos: invalid output dimensions or frame rate.')
  }

  const usableClips = clips.filter(item => {
    return item?.clip instanceof Blob && item.clip.size > 0
  })

  if (usableClips.length !== clips.length) {
    throw new TypeError('concatenateVideos: every clip must contain a non-empty Blob.')
  }

  const ffmpeg = await getFFmpeg()
  const prefix = `job_${crypto.randomUUID().replaceAll('-', '')}`
  const outputName = `${prefix}_output.mp4`
  const inputNames = []
  let progressHandler

  try {
    progressHandler = ({ progress }) => {
      onProgress(Math.max(0, Math.min(1, progress)))
    }

    ffmpeg.on('progress', progressHandler)

    // Import the source blobs into FFmpeg's virtual filesystem.
    for (let i = 0; i < usableClips.length; i++) {
      const inputName = `${prefix}_input_${i}.webm`
      inputNames.push(inputName)

      await ffmpeg.writeFile(
        inputName,
        await fetchFile(usableClips[i].clip)
      )
    }

    // Build one filter graph. Each input is decoded, trimmed,
    // normalized, and supplied with audio (silence if absent).
    const args = ['-y']

    for (const inputName of inputNames) {
      args.push('-i', inputName)
    }

    const filters = []
    const concatInputs = []

    usableClips.forEach((item, i) => {
      const start = Math.max(0, Number(item.trimStart) || 0)
      const end = Number.isFinite(item.trimEnd)
        ? item.trimEnd
        : Number(item.duration)

      if (!Number.isFinite(end) || end <= start) {
        throw new RangeError(
          `Clip ${i + 1} has an invalid trim range.`
        )
      }

      const duration = end - start
      const videoLabel = `v${i}`
      const audioLabel = `a${i}`

      filters.push(
        `[${i}:v:0]` +
        `trim=start=${start}:duration=${duration},` +
        `setpts=PTS-STARTPTS,` +
        `scale=${width}:${height}:force_original_aspect_ratio=decrease,` +
        `pad=${width}:${height}:(ow-iw)/2:(oh-ih)/2,` +
        `setsar=1,fps=${fps},format=yuv420p` +
        `[${videoLabel}]`
      )

      // Use the clip's audio if present; otherwise synthesize
      // silence for exactly the trimmed clip duration.
      if (item.hasAudio === false) {
        filters.push(
          `anullsrc=r=48000:cl=stereo,` +
          `atrim=duration=${duration},` +
          `asetpts=PTS-STARTPTS[${audioLabel}]`
        )
      } else {
        filters.push(
          `[${i}:a:0]` +
          `atrim=start=${start}:duration=${duration},` +
          `asetpts=PTS-STARTPTS,` +
          `aresample=48000,` +
          `aformat=sample_fmts=fltp:sample_rates=48000:` +
          `channel_layouts=stereo[${audioLabel}]`
        )
      }

      concatInputs.push(`[${videoLabel}][${audioLabel}]`)
    })

    filters.push(
      `${concatInputs.join('')}` +
      `concat=n=${usableClips.length}:v=1:a=1[outv][outa]`
    )

    args.push(
      '-filter_complex', filters.join(';'),
      '-map', '[outv]',
      '-map', '[outa]',
      '-c:v', 'libx264',
      '-preset', 'ultrafast',
      '-crf', '20',
      '-c:a', 'aac',
      '-b:a', '192k',
      '-movflags', '+faststart',
      outputName
    )

    await ffmpeg.exec(args)

    const output = await ffmpeg.readFile(outputName)

    onProgress(1)

    // Copy into a standalone Blob before cleaning up FFmpeg files.
    return new Blob([output], { type: 'video/mp4' })
  } finally {
    if (progressHandler) {
      ffmpeg.off('progress', progressHandler)
    }

    for (const filename of [...inputNames, outputName]) {
      try {
        await ffmpeg.deleteFile(filename)
      } catch {
        // Ignore files that were never created.
      }
    }
  }
}
