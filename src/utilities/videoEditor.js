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

export const createCaption = data => {
  return data
    .filter(caption => caption.text.trim() && caption.end > caption.start)
    .map(caption => {
      const text = caption.text
        .replace(/\\/g, '\\\\')
        .replace(/'/g, "'\\''")
        .replace(/:/g, '\\:')
        .replace(/%/g, '\\%')

      return `drawtext=text='${text}':` +
        `fontcolor=${style.fontColor}:fontsize=${style.fontSize}:` +
        `borderw=${style.borderWidth}:bordercolor=${style.borderColor}:` +
        `x=(w-text_w)/2:y=h*0.85:` +
        `enable='between(t,${caption.start},${caption.end})'`
    })
    .join(',')
}

export const updateCaption = (id, data) => {}
export const deleteCaption = id => {}

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
