import { FFmpeg } from '@ffmpeg/ffmpeg'
import { fetchFile } from '@ffmpeg/util'

const createFFmpeg = async () => {
  const ffmpeg = new FFmpeg()
  await ffmpeg.load()
  return ffmpeg
}

const cleanup = async (ffmpeg, files) => {
  await Promise.all(
    files.map(async file => {
      try {
        await ffmpeg.deleteFile(file)
      } catch {
        // The file may not have been created.
      }
    })
  )
}

const formatSrtTime = seconds => {
  if (!Number.isFinite(seconds) || seconds < 0) {
    throw new Error('Caption times must be non-negative finite numbers.')
  }

  const ms = Math.round(seconds * 1000)
  const hours = Math.floor(ms / 3_600_000)
  const minutes = Math.floor((ms % 3_600_000) / 60_000)
  const secs = Math.floor((ms % 60_000) / 1000)
  const millis = ms % 1000

  return `${String(hours).padStart(2, '0')}:` +
    `${String(minutes).padStart(2, '0')}:` +
    `${String(secs).padStart(2, '0')},` +
    String(millis).padStart(3, '0')
}

export const createSrtContent = captions =>
  captions.map((caption, index) => {
    if (
      !Number.isFinite(caption.start) ||
      !Number.isFinite(caption.end) ||
      caption.start < 0 ||
      caption.end <= caption.start
    ) {
      throw new Error(`Caption ${index + 1} has invalid timing.`)
    }

    return [
      index + 1,
      `${formatSrtTime(caption.start)} --> ${formatSrtTime(caption.end)}`,
      String(caption.text ?? ''),
      ''
    ].join('\n')
  }).join('\n')

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

// Converts standard "#RRGGBB" or "RRGGBB" into FFmpeg's required "&H00BBGGRR" format
const formatFfmpegColor = hex => {
  if (typeof hex !== 'string' || !hex) {
    return '&H00FFFFFF'
  }
  if (hex.toLowerCase() === 'transparent') {
    return '&HFF000000'
  }
  const match = /^#?([0-9a-f]{6})$/i.exec(hex)
  if (!match) {
    return '&H00FFFFFF'
  }
  const [, rgb] = match
  return `&H00${rgb.slice(4, 6)}${rgb.slice(2, 4)}${rgb.slice(0, 2)}`.toUpperCase()
}

const createSubtitleFilter = data => {
  const style = [
    `FontName=${data.fontFamily}`,
    `FontSize=${data.fontSize}`,
    `PrimaryColour=${formatFfmpegColor(data.color)}`,
    `OutlineColour=${formatFfmpegColor(data.strokeColor)}`,
    `Bold=${data.bold ? 1 : 0}`,
    `Italic=${data.italic ? 1 : 0}`,
    `Underline=${data.underline ? 1 : 0}`,
    `Outline=${data.stroke ? 1 : 0}`,
    `Alignment=2`
  ].join(',')

  return `subtitles=captions.srt:force_style='${style}'`
}

export const createCaptions = async (blob, data) => {
  if (!(blob instanceof Blob)) {
    throw new Error('A source video Blob is required.')
  }
  if (!Array.isArray(data)) {
    throw new Error('Captions must be an array.')
  }
  if (data.length === 0) {
    return source
  }

  // Validate and generate subtitle data before starting FFmpeg.
  const subtitles = createSrtContent(data)

  const ffmpeg = await createFFmpeg()
  const input = 'input.webm'
  const subtitleFile = 'captions.srt'
  const output = 'output.webm'
  const files = [input, subtitleFile, output]

  try {
    await ffmpeg.writeFile(input, await fetchFile(source))
    await ffmpeg.writeFile(subtitleFile, subtitles)

    await ffmpeg.exec([
      '-i', input,
      '-vf', createSubtitleFilter(data),
      '-c:v', 'libvpx-vp9',
      '-c:a', 'libopus',
      '-y', output
    ])

    const result = await ffmpeg.readFile(output)

    return new Blob([result], { type: 'video/webm' })
  } finally {
    await cleanup(ffmpeg, files)
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
