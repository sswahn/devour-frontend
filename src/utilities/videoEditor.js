import { FFmpeg } from '@ffmpeg/ffmpeg'
import { fetchFile } from '@ffmpeg/util'

export const concatenateVideos = async (footage, setProgress) => {
  if (!Array.isArray(footage) || footage.length === 0) {
    throw new Error('At least one video clip is required.')
  }
  if (active) {
    throw new Error('An export is already in progress.')
  }
  const ffmpeg = new FFmpeg()
  await ffmpeg.load()
  
  const handleProgress = ({ progress }) => {
    setProgress(Math.round(progress * 100))
  }

  ffmpeg.on('progress', handleProgress)
  
  const files = []
  
  for (let i = 0; i < footage.length; i++) {
    const name = `clip${i}.webm`
    await ffmpeg.writeFile(name, await fetchFile(footage[i].clip))
    files.push(name)
  }

  const list = 'footage.txt'

  await ffmpeg.writeFile(list, new TextEncoder().encode(
      files.map(name => `file '${name}'`).join('\n')
    )
  )
    
  await ffmpeg.exec([
    '-f', 'concat',
    '-safe', '0',
    '-i', list,
    '-c', 'copy',
    'output.webm'
  ])

  const data = await ffmpeg.readFile('output.webm')

  for (const file of [...files, list, 'output.webm']) {
    await ffmpeg.deleteFile(file)
  }

  const blob = new Blob([data], { type: 'video/webm' })
  ffmpeg.off('progress', handleProgress)
  setProgress(100)
  return blob
}

// Converts standard "#RRGGBB" or "RRGGBB" into FFmpeg's required "&H00BBGGRR" format
const formatFfmpegColor = (hexStr) => {
  if (!hexStr) return '&H00FFFFFF'; // Default White
  const cleanHex = hexStr.replace('#', '');
  
  // Extract RGB components
  const r = cleanHex.substring(0, 2);
  const g = cleanHex.substring(2, 4);
  const b = cleanHex.substring(4, 6);
  
  // Return in BGR (Blue Green Red) order prefixed by &H00
  return `&H00${b}${g}${r}`;
}

export const createSrtContent = data => {
  return data.map((caption, index) => {
      // Helper to format seconds (e.g. 12.34) into SRT time (00:00:12,340)
      const formatTime = seconds => {
        const date = new Date(null)
        date.setSeconds(Math.floor(seconds))
        const ms = Math.floor((seconds % 1) * 1000).toString().padStart(3, '0')
        const timeStr = date.toISOString().substr(11, 8)
        return `${timeStr},${ms}`
      }
      // what about captions.style?
      return `${index + 1}\n${formatTime(caption.start)} --> ${formatTime(caption.end)}\n${caption.text}\n`;
    })
    .join('\n')
}

export const createCaption = async data => {
  const ffmpeg = new FFmpeg()
  await ffmpeg.load()

  const srtContent = createSrtContent(data)
  await ffmpeg.writeFile('subtitles.srt', srtContent) // sanitize data
  const formatedData = data.map(caption => ({ 
    ...caption, 
    backgroundColor: formatFfmpegColor(caption.style.backgroundColor)
    // add all the values that have hex codes.
  }))
  
  // is subtitles better than drawtext?
  
  // this also needs to be in a loop:
  const styles = 'subtitles=subtitles.srt:force_style=' + 
    `FontSize=${style.fontSize},` +
    `PrimaryColour=${formatFfmpegColor()},` +
    `BorderStyle=3,` +
    `Outline=2,` +
    `OutlineColour=&H00000000`

  // can it handle webm content? 
  await ffmpeg.exec([
    '-i', 'input.mp4',
    '-vf', styles,
    'output.mp4' 
  ])
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
