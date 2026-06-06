import { useState, useRef, useEffect } from 'react'
import useFootage from '../../hooks/useFootage'
import PauseButton from './PauseButton/PauseButton'
import MuteButton from './MuteButton/MuteButton'
import styles from './Editor.module.css'

function Editor() {
  const { footage, duration } = useFootage()
  const [source, setSource] = useState('')
  const url = useRef(null)
  const videoRef = useRef(null)

  const combineFootage = () => {
    const combinedBlob = new Blob(footage, { type: 'video/webm' })
    const videoUrl = URL.createObjectURL(combinedBlob)
    url.current = videoUrl
    setSource(videoUrl)
  }

  const onPlay = event => {}
  const onPause = event => {}

  useEffect(() => {
    combineFootage()
    return () => {
      URL.revokeObjectURL(url.current)
    }
  }, [])

  // should be single buttons
  
  return (
    <section className={styles.editor}>
      <PauseButton videoRef={videoRef} />
      <MuteButton videoRef={videoRef} />
      <video ref={videoRef} src={source} onPlay={onPlay} onPause={onPause} loop playsinline />
    </section>
  )
}

export default Editor
