import { FFmpeg } from '@ffmpeg/ffmpeg'
import { fetchFile } from '@ffmpeg/util'

const createFFmpeg = async () => {
  const ffmpeg = new FFmpeg()
  try {
    await ffmpeg.load()
    return ffmpeg
  } catch (error) {
    ffmpeg.terminate()
    throw error
  }
}

const deleteFile = async (ffmpeg, file, errors) => {
  try {
    await ffmpeg.deleteFile(file)
  } catch (error) {
    errors.push(error)
  }
}

const terminateProcess = (ffmpeg, errors) => {
  try {
    ffmpeg.terminate()
  } catch (error) {
    errors.push(error)
  }
}

const cleanup = async (ffmpeg, files) => {
  const errors = []
  try {
    for (const file of files) {
      await deleteFile(ffmpeg, file, errors)
    }
  } finally {
    terminateProcess(ffmpeg, errors)
  }
  if (errors.length > 0) {
    throw new AggregateError(errors, 'FFmpeg cleanup failed.')
  }
}

const inspectVideo = async (label, blob) => {
  try {
    const duration = await getDuration(blob)

    console.log(label, {
      size: blob.size,
      type: blob.type,
      duration
    })
  } catch (error) {
    console.error(`${label} failed`, error)
  }
}

export const concatenateVideos = async footage => {
  if (!Array.isArray(footage) || footage.length === 0 || footage.some(item => !(item?.clip instanceof Blob))) {
    throw new Error('Provide an array of video clips.')
  }
  
  let ffmpeg = null
  const inputs = footage.map((_, index) => `clip${index}.webm`)
  const manifest = 'footage.txt'
  const output = 'output.webm'
  const files = [...inputs, manifest, output]
  
  try {
    ffmpeg = await createFFmpeg()
    await Promise.all(footage.map(async ({ clip }, index) => {
 
      console.log(`Actual clip: ${clip}`)
      await inspectVideo(`Input clip ${index}`, clip)
      
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
    const result = new Blob([data], { type: 'video/webm' })
    
    await inspectVideo('Concatenated output', result)
    
    return result
  } finally {
    if (ffmpeg !== null) {
      await cleanup(ffmpeg, files)
    }
  }
}

const validateCaptions = captions => {
  if (!Array.isArray(captions)) {
    throw new TypeError('Captions must be an array.')
  }

  captions.forEach((caption, index) => {
    if (!caption || typeof caption !== 'object' || Array.isArray(caption)) {
      throw new TypeError(`Caption ${index} must be an object.`)
    }
    if (typeof caption.text !== 'string' || !caption.text.trim()) {
      throw new TypeError(`Caption ${index} must be nonempty string.`)
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

const formatAssTime = seconds => {
  const totalCentiseconds = Math.round(seconds * 100)
  const h = Math.floor(totalCentiseconds / 360000)
  const m = Math.floor((totalCentiseconds % 360000) / 6000)
  const s = Math.floor((totalCentiseconds % 6000) / 100)
  const cs = totalCentiseconds % 100
  return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}.${String(cs).padStart(2, '0')}`
}

const toAssColor = hex => {
  if (typeof hex !== 'string' || !/^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(hex)) {
    throw new TypeError(`Invalid hex color: ${hex}`)
  }
  let clean = hex.slice(1)
  if (clean.length === 3) {
    clean = [...clean].map(char => char + char).join('')
  }
  const r = clean.slice(0, 2)
  const g = clean.slice(2, 4)
  const b = clean.slice(4, 6)
  return `&H00${b}${g}${r}`
}

const generateAssContent = captions => {
  let ass = `[Script Info]\n`
  ass += `Title: Generated Captions\n`
  ass += `ScriptType: v4.00+\n`
  ass += `PlayResX: 1920\n`
  ass += `PlayResY: 1080\n`
  ass += `WrapStyle: 0\n\n`

  ass += `[V4+ Styles]\n`
  ass += `Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding\n`

  const alignments = { left: 1, center: 2, right: 3 }

  const addStyle = ({
    name,
    style,
    color,
    stroke,
    background
  }) => {
    const hasBackground = background !== 'transparent'
    const borderStyle = hasBackground ? 3 : 1
    const outlineColor = stroke
      ? toAssColor(style.strokeColor)
      : '&H00000000'
    const outlineWidth = stroke ? style.strokeWidth : 0
    const backColor = hasBackground
      ? toAssColor(background)
      : '&HFF000000'

    ass += `Style: ${name},Arial,${style.fontSize},${color},&H000000FF,${outlineColor},${backColor},${style.bold ? -1 : 0},${style.italic ? -1 : 0},${style.underline ? -1 : 0},0,100,100,0,0,${borderStyle},${outlineWidth},0,${alignments[style.textAlign]},20,20,50,1\n`
  }

  const events = []

  captions.forEach((caption, index) => {
    const style = caption.style
    const name = `Caption${index}`
    const hasBackground = style.backgroundColor !== 'transparent'
    const hasStroke = style.stroke === true
    const color = toAssColor(style.color)

    if (hasBackground && hasStroke) {
      // Background-only layer: transparent glyphs, opaque box.
      const backgroundName = `${name}Background`

      addStyle({
        name: backgroundName,
        style,
        color: '&HFF000000',
        stroke: false,
        background: style.backgroundColor
      })

      // Foreground layer: visible text with its outline.
      addStyle({
        name,
        style,
        color,
        stroke: true,
        background: 'transparent'
      })

      events.push({
        caption,
        name: backgroundName,
        layer: 0
      })

      events.push({
        caption,
        name,
        layer: 1
      })
    } else {
      // One layer is sufficient when only one or neither effect is enabled.
      addStyle({
        name,
        style,
        color,
        stroke: hasStroke,
        background: hasBackground
          ? style.backgroundColor
          : 'transparent'
      })

      events.push({
        caption,
        name,
        layer: 0
      })
    }
  })

  ass += `\n[Events]\n`
  ass += `Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text\n`

  for (const { caption, name, layer } of events) {
    const start = formatAssTime(caption.start)
    const end = formatAssTime(caption.end)

    const text = caption.text
      .replace(/\\/g, '\\\\')
      .replace(/\{/g, '\\{')
      .replace(/\}/g, '\\}')
      .replace(/\r\n|\r|\n/g, '\\N')

    ass += `Dialogue: ${layer},${start},${end},${name},,0,0,0,,${text}\n`
  }

  return ass
}

export const createCaptions = async (blob, captions, setProgress = () => {}) => {
  if (!(blob instanceof Blob)) {
    throw new TypeError('Video blob must be an instance of Blob.')
  }
  if (blob.size === 0) {
    throw new Error('blob must not be empty.')
  }
  
  const validCaptions = validateCaptions(captions)
  
  if (validCaptions.length === 0) {
    throw new Error('At least one caption is required.')
  }
  let ffmpeg = null
  const timestamp = Date.now()
  const input = `input_${timestamp}.webm`
  const manifest = `subtitles_${timestamp}.ass`
  const output = `output_${timestamp}.webm`
  const files = [input, manifest, output]

  const handleProgress = ({ progress }) => {
    setProgress(Math.round(progress * 100))
  }
  
  try {
    ffmpeg = await createFFmpeg()
    ffmpeg.on('progress', handleProgress)
    await ffmpeg.writeFile(input, await fetchFile(blob))
    const assContent = generateAssContent(validCaptions)
    await ffmpeg.writeFile(manifest, new TextEncoder().encode(assContent))
    await ffmpeg.exec([
      '-i', input,
      '-vf', `subtitles=${manifest}`,
      '-c:a', 'copy',
      '-y', output
    ])
    const data = await ffmpeg.readFile(output)
    setProgress(100)
    return new Blob([data], { type: 'video/webm' })
  } finally {
    if (ffmpeg !== null) {
      ffmpeg.off('progress', handleProgress)
      await cleanup(ffmpeg, files)
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
