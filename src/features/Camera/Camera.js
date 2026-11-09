import { useState, useRef, useEffect } from 'react'
import useOverlay from '../../hooks/useOverlay'
import useFootage from '../../hooks/useFootage'
import camera from '../../utilities/camera'
import database from '../../utilities/database'
import TopNav from './TopNav/TopNav'
import EditorButton from './EditorButton/EditorButton'
import RecordButton from './RecordButton/RecordButton'
import MuteButton from './MuteButton/MuteButton'
import ViewPort from './ViewPort/ViewPort'
import styles from './Camera.module.css'

function Camera({ openEditor }) {
  const { closeOverlay } = useOverlay()
  const { footage, setFootage } = useFootage()
  const [mode, setMode] = useState('off')
  const [timer, setTimer] = useState(60)
  const streamRef = useRef(null)
  const videoRef = useRef(null)
  let active = true

  const stopCamera = event => {
    if (streamRef.current) {
      camera.off(streamRef.current) 
      streamRef.current = null
    }
  }
 
  const startCamera = async () => {
    try {
      const stream = await camera.on()
      if (!active) {
        return camera.off(stream)
      }
      streamRef.current = stream
      videoRef.current.srcObject = stream
    } catch (error) {
      alert('Error accessing camera.') // display error then close overlay or recover
      throw error
      // closeCamera()
    }
  }

  const closeCamera = event => {
    stopCamera()
    closeOverlay() // this conflicted with opening editor for some reason
    if (document.fullscreenElement) {
      document.exitFullscreen()
    }
  }
  
  useEffect(() => {
    if (!streamRef.current) {
      startCamera()
    }
    return () => {
      active = false
      stopCamera()
    }
  }, [])

  useEffect(() => {
    if (!footage.length) {
      return
    }
    const totalDuration = footage.reduce(
      (acc, val) => acc + val.duration, 0
    )
    const result = Math.ceil(60 - totalDuration)
    setTimer(result)
  }, [])
  
  return (
    <section className={styles.camera}>
      <TopNav closeCamera={closeCamera} mode={mode} timer={timer} setTimer={setTimer} stopCamera={stopCamera} streamRef={streamRef} />
      <MuteButton streamRef={streamRef} />
      <ViewPort videoRef={videoRef} />
      <RecordButton mode={mode} setMode={setMode} streamRef={streamRef} timer={timer} />
      {/* footage.length > 0 && */ }
    <EditorButton openEditor={openEditor} />
   
    </section>
  )
}

export default Camera
