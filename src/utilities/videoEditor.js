import { FFmpeg } from '@ffmpeg/ffmpeg'
import { fetchFile } from '@ffmpeg/util'

const ffmpeg = new FFmpeg()
let loaded = false

export const concatenateVideos = async footage => {
  if (!loaded) {
    await ffmpeg.load()
    loaded = true
  }

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

  return new Blob([data], { type: 'video/webm' })
}


export const getDuration = blob => {
  return new Promise((resolve, reject) => {
    const video = document.createElement('video')
    const url = URL.createObjectURL(blob)

    const cleanup = () => {
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
