import { FFmpeg } from '@ffmpeg/ffmpeg'
import { fetchFile } from '@ffmpeg/util'

const ffmpeg = new FFmpeg()
let loaded = false

export default async function concatenateVideos(clips) {
  if (!loaded) {
    await ffmpeg.load()
    loaded = true
  }

  const files = []

  for (let i = 0; i < clips.length; i++) {
    const name = `clip${i}.webm`
    await ffmpeg.writeFile(name, await fetchFile(clips[i].clip))
    files.push(name)
  }

  const list = 'clips.txt'

  await ffmpeg.writeFile(
    list,
    new TextEncoder().encode(
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
