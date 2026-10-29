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

    const data = await ffmpeg.readFile(output)

    setProgress(100)

    return new Blob([data], { type: 'video/webm' })
  } finally {
    ffmpeg.off('progress', handleProgress)
    await cleanup(ffmpeg, files)
    ffmpeg.terminate()
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

// Helper: Convert seconds to ASS timestamp format (H:MM:SS.cc)
const formatAssTime = (seconds) => {
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = Math.floor(seconds % 60)
  const cs = Math.floor((seconds % 1) * 100)
  return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}.${String(cs).padStart(2, '0')}`
}

// Helper: Convert hex color to ASS format (&H[Alpha][Blue][Green][Red]&)
const toAssColor = (hex, alphaHex = '00') => {
  if (!hex) return `&H${alphaHex}FFFFFF&`
  const clean = hex.replace('#', '').trim()
  let r = 'ff', g = 'ff', b = 'ff'
  if (clean.length === 3) {
    r = clean[0] + clean[0]
    g = clean[1] + clean[1]
    b = clean[2] + clean[2]
  } else if (clean.length >= 6) {
    r = clean.substring(0, 2)
    g = clean.substring(2, 4)
    b = clean.substring(4, 6)
  }
  return `&H${alphaHex}${b}${g}${r}&`
}

// Generate the complete ASS subtitle content string
const generateAssContent = (validCaptions) => {
  let ass = `[Script Info]\n`
  ass += `Title: Generated Captions\n`
  ass += `ScriptType: v4.00+\n`
  ass += `PlayResX: 1920\n`
  ass += `PlayResY: 1080\n`
  ass += `WrapStyle: 0\n\n`

  ass += `[V4+ Styles]\n`
  ass += `Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding\n`
  ass += `Style: Default,Arial,36,&H00FFFFFF,&H000000FF,&H00000000,&H80000000,0,0,0,0,100,100,0,0,1,2,0,2,20,20,50,1\n\n`

  ass += `[Events]\n`
  ass += `Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text\n`

  for (const caption of validCaptions) {
    const style = caption.style || {}
    const startTime = formatAssTime(caption.start)
    const endTime = formatAssTime(caption.end)

    const fontSize = Number(style.fontSize) || 36
    const color = toAssColor(style.color || '#ffffff')
    const strokeColor = toAssColor(style.strokeColor || '#000000')
    const strokeWidth = Number.isFinite(style.strokeWidth) ? style.strokeWidth : 2
    //const strokeWidth = Number(style.strokeWidth) !== undefined ? Number(style.strokeWidth) : 2
    const bold = style.bold ? 1 : 0
    const italic = style.italic ? 1 : 0
    const underline = style.underline ? 1 : 0

    // ASS numpad alignment: 1 = bottom-left, 2 = bottom-center, 3 = bottom-right
    let alignment = 2
    if (style.textAlign === 'left') alignment = 1
    else if (style.textAlign === 'right') alignment = 3

    // Build inline style override tags
    let tags = `{\\fs${fontSize}\\c${color}\\3c${strokeColor}\\bord${strokeWidth}\\b${bold}\\i${italic}\\u${underline}\\an${alignment}}`

    // Handle newlines safely in ASS
    const text = (caption.text || '').replace(/\r?\n/g, '\\N')

    ass += `Dialogue: 0,${startTime},${endTime},Default,,0,0,0,,${tags}${text}\n`
  }

  return ass
}

export const createCaptions = async (blob, captions, setProgress = () => {}) => {
  if (!(blob instanceof Blob)) {
    throw new TypeError('Video blob must be an instance of Blob.')
  }

  const validCaptions = validateCaptions(captions)

  const ffmpeg = await createFFmpeg()
  const timestamp = Date.now()
  const input = `input_${timestamp}.webm`
  const manifest = `subtitles_${timestamp}.ass`
  const output = `output_${timestamp}.webm`
  const files = [input, manifest, output]

  const handleProgress = ({ progress }) => {
    setProgress(Math.round(progress * 100))
  }

  ffmpeg.on('progress', handleProgress)
  
  try {
    // 1. Write input video to virtual file system
    await ffmpeg.writeFile(input, await fetchFile(blob))

    if (validCaptions.length === 0) {
      throw new Error('No valid captions found to process.')
    }

    // 2. Generate and write the ASS subtitle file
    const assContent = generateAssContent(validCaptions)
    await ffmpeg.writeFile(manifest, new TextEncoder().encode(assContent))

    // 3. Run FFmpeg command using a single robust subtitles filter
    await ffmpeg.exec([
      '-i', input,
      '-vf', `subtitles=${manifest}`,
      '-c:a', 'copy',
      '-y', output
    ])

    // 4. Read output file back as a Blob
    const data = await ffmpeg.readFile(output)
    setProgress(100)
    return new Blob([data], { type: 'video/webm' })

  } finally {
    // 5. Guaranteed cleanup of all virtual files to prevent WASM memory leaks
    ffmpeg.off('progress', handleProgress)
    await cleanup(ffmpeg, files)
    ffmpeg.terminate()
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
