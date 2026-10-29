import { FFmpeg } from '@ffmpeg/ffmpeg'
import { fetchFile } from '@ffmpeg/util'

const createFFmpeg = async () => {
  const ffmpeg = new FFmpeg()
  await ffmpeg.load()
  return ffmpeg
}

const cleanup = async (ffmpeg, files) => {
  await Promise.all(files.map(async file => {
    try {
      await ffmpeg.deleteFile(file)
    } catch {
      // The file may not have been created.
    }
  }))
}

// Concatenate an array of footage objects: [{ clip: Blob }, ...].
export const concatenateVideos = async (footage, setProgress = () => {}) => {
  if (!Array.isArray(footage) || footage.length === 0 || footage.some(item => !(item?.clip instanceof Blob))) {
    throw new Error('Provide an array of video clips.')
  }

  const ffmpeg = await createFFmpeg()
  const inputs = footage.map((_, index) => `clip${index}.webm`)
  const manifest = 'footage.txt'
  const output = 'output.webm'
  const files = [...inputs, manifest, output]

  const handleProgress = ({ progress }) => {
    setProgress(Math.round(progress * 100))
  }

  ffmpeg.on('progress', handleProgress)

  try {
    await Promise.all(footage.map(async ({ clip }, index) => {
      await ffmpeg.writeFile(inputs[index], await fetchFile(clip))
    }))

    const list = inputs.map(file => `file '${file}'`).join('\n')

    await ffmpeg.writeFile(manifest, list)

    await ffmpeg.exec([
      '-f', 'concat',
      '-safe', '0',
      '-i', manifest,
      '-c', 'copy',
      '-y', output
    ])

    const result = await ffmpeg.readFile(output)

    setProgress(100)

    return new Blob([result], { type: 'video/webm' })
  } finally {
    ffmpeg.off('progress', handleProgress)
    await cleanup(ffmpeg, files)
  }
}

const validateCaptions = captions => {
  if (!Array.isArray(captions)) {
    throw new TypeError('Captions must be an array.')
  }

  captions.forEach((caption, index) => {
    if (!caption || typeof caption !== 'object') {
      throw new TypeError(`Caption ${index} must be an object.`)
    }
    if (typeof caption.text !== 'string' || !caption.text.trim()) {
      throw new TypeError(`Caption ${index} must have nonempty text.`)
    }
    if (
      !Number.isFinite(caption.start) ||
      !Number.isFinite(caption.end) ||
      caption.start < 0 ||
      caption.end <= caption.start
    ) {
      throw new RangeError(`Caption ${index} has invalid timing.`)
    }
  })
  return captions
}

// Helper to format colors safely (handles hex, shorthand hex, and fallbacks)
const formatColor = (value, fallback = '0xffffff') => {
  if (!value) return fallback
  const clean = value.replace('#', '').trim()
  if (clean.length === 3) {
    return `0x${clean.split('').map(c => c + c).join('')}`
  }
  return clean.startsWith('0x') ? clean : `0x${clean}`
}

export const createCaptions = async (blob, captions) => {
  if (!blob || !captions.length) {
    throw new Error('Video blob and captions array are required.')
  }

  const timestamp = Date.now()
  const inputFileName = `input_${timestamp}.mp4`
  const subFileName = `subtitles_${timestamp}.ass`
  const outputFileName = `output_${timestamp}.mp4`
  const createdFiles = [inputFileName, subFileName, outputFileName]

  try {
    const ffmpeg = await createFFmpeg()
    // 1. Write input video to virtual file system
    await ffmpeg.writeFile(inputFileName, await fetchFile(blob))

    // 2. Validate captions
    const validCaptions = validateCaptions(captions)

    if (validCaptions.length === 0) {
      throw new Error('No valid captions found to process.')
    }

    // 3. Generate and write the ASS subtitle file
    const assContent = generateAssContent(validCaptions)
    await ffmpeg.writeFile(subFileName, new TextEncoder().encode(assContent))

    // 4. Run FFmpeg command using a single robust subtitles filter
    await ffmpeg.exec([
      '-i', inputFileName,
      '-vf', `subtitles=${subFileName}`,
      '-c:a', 'copy',
      outputFileName
    ])

    // 5. Read output file back as a Blob
    const data = await ffmpeg.readFile(outputFileName)
    return new Blob([data.buffer], { type: 'video/mp4' })

  } finally {
    // 6. Guaranteed cleanup of all virtual files to prevent WASM memory leaks
    for (const file of createdFiles) {
      try {
        await ffmpeg.deleteFile(file)
      } catch (e) {
        // Ignore files that weren't created or were already cleaned up
      }
    }
  }
}

export const getDuration = blob => {
  return new Promise((resolve, reject) => {
    const video = document.createElement('video')
    const url = URL.createObjectURL(blob)

    const cleanup = () => {
      video.onloadedmetadata = null
      video.onerror = null
      URL.revokeObjectURL(url)
      video.remove()
    }

    video.preload = 'metadata'

    video.onloadedmetadata = () => {
      const duration = video.duration
      cleanup()

      if (!Number.isFinite(duration)) {
        return reject(new Error('Could not determine video duration.'))
      }

      resolve(duration)
    }

    video.onerror = () => {
      cleanup()
      reject(new Error('Could not load video metadata.'))
    }

    video.src = url
  })
}
