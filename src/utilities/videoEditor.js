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

export const createCaptions = async (blob, data) => {


  import { fetchFile } from '@ffmpeg/ffmpeg'

export const burnCaptionsToVideo = async (ffmpeg, videoBlob, captions = []) => {
  if (!videoBlob || !captions.length) {
    throw new Error('Video blob and captions array are required.')
  }

  const inputFileName = `input_${Date.now()}.mp4`
  const outputFileName = `output_${Date.now()}.mp4`
  const createdFiles = [inputFileName, outputFileName]

  try {
    // 1. Write input video blob to FFmpeg virtual file system
    await ffmpeg.writeFile(inputFileName, await fetchFile(videoBlob))

    // 2. Filter and validate captions
    const validCaptions = captions.filter(caption =>
      typeof caption.text === 'string' &&
      caption.text.trim() &&
      Number.isFinite(caption.start) &&
      Number.isFinite(caption.end) &&
      caption.start >= 0 &&
      caption.end > caption.start
    )

    if (validCaptions.length === 0) {
      throw new Error('No valid captions found to process.')
    }

    const filters = []

    // Helper to format colors safely (handles hex, shorthand hex, and fallbacks)
    const formatColor = (value, fallback = '0xffffff') => {
      if (!value) return fallback
      const clean = value.replace('#', '').trim()
      if (clean.length === 3) {
        return `0x${clean.split('').map(c => c + c).join('')}`
      }
      return clean.startsWith('0x') ? clean : `0x${clean}`
    }

    // 3. Process each caption into a text file and build drawtext filters
    for (let i = 0 i < validCaptions.length i++) {
      const caption = validCaptions[i]
      const style = caption.style || {}
      const textFileName = `caption_${i}_${Date.now()}.txt`
      
      createdFiles.push(textFileName)
      await ffmpeg.writeFile(textFileName, new TextEncoder().encode(caption.text))

      const fontSize = Math.max(8, Math.min(200, Number(style.fontSize) || 36))
      const strokeWidth = Math.max(0, Math.min(20, Number(style.strokeWidth) || 0))
      
      // Handle text alignment (x-coordinate mapping)
      let xCoord = '(w-text_w)/2' // default center
      if (style.textAlign === 'left') {
        xCoord = '50' // 50px padding from left
      } else if (style.textAlign === 'right') {
        xCoord = 'w-text_w-50' // 50px padding from right
      }

      const options = [
        `textfile=${textFileName}`,
        `fontcolor=${formatColor(style.color, '0xffffff')}`,
        `fontsize=${fontSize}`,
        `borderw=${strokeWidth}`,
        `bordercolor=${formatColor(style.strokeColor, '0x000000')}`,
        `x=${xCoord}`,
        `y=h*0.85`,
        `enable='between(t\\,${caption.start}\\,${caption.end})'`
      ]

      // Optional font file handling
      if (style.fontFile) {
        options.push(`fontfile=${style.fontFile}`)
      }

      // Background box styling
      if (style.backgroundColor && style.backgroundColor !== 'transparent') {
        options.push('box=1')
        options.push(`boxcolor=${formatColor(style.backgroundColor, '0x000000aa')}`)
        options.push('boxborderw=8')
      }

      filters.push(`drawtext=${options.join(':')}`)
    }

    const filterChain = filters.join(',')

    // 4. Run FFmpeg command (copy audio stream to avoid re-encoding overhead)
    await ffmpeg.exec([
      '-i', inputFileName,
      '-vf', filterChain,
      '-c:a', 'copy',
      outputFileName
    ])

    // 5. Read output file back into memory as a Blob
    const data = await ffmpeg.readFile(outputFileName)
    return new Blob([data.buffer], { type: 'video/mp4' })

  } finally {
    // 6. Cleanup virtual file system to prevent memory leaks in WASM
    for (const file of createdFiles) {
      try {
        await ffmpeg.deleteFile(file)
      } catch (e) {
        // Ignore files that weren't created or already deleted
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
