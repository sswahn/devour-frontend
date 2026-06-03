import { useState, useRef, useEffect } from 'react'
import { overlay } from '../../config'
import camera from '../../utilities/camera'
import TopNav from './TopNav/TopNav'
import MuteButton from './MuteButton/MuteButton'
import RecordButton from './RecordButton/RecordButton'
import LocationButton from './LocationButton/LocationButton'
import ViewPort from './ViewPort/ViewPort'
import styles from './Camera.module.css'

function Camera() {
  const [mode, setMode] = useState('off')
  const [timer, setTimer] = useState(60)
  const streamRef = useRef(null)
  const videoRef = useRef(null)
 
  const startCamera = async () => {
    try {
      const stream = await camera.on()
      streamRef.current = stream
      videoRef.current.srcObject = stream

      // const caps = camera.getCapabilities(stream)
      // alert(JSON.stringify(caps))
    
    } catch (error) {
      console.error('Error accessing camera: ', error)
    }
  }
  
  const stopCamera = event => {
    if (streamRef.current) {
      camera.off(streamRef.current) 
      streamRef.current = null
    }
  }

  const closeCamera = event => {
    stopCamera()
    if (document.fullscreenElement) {
      document.exitFullscreen()
    }
  }
  
  useEffect(() => {
    if (!streamRef.current) {
      startCamera()
    }
    return () => {
      closeCamera()
    }
  }, [])
  
  return (
    <section className={styles.camera}>
      <TopNav closeCamera={closeCamera} mode={mode} timer={timer} setTimer={setTimer} stopCamera={stopCamera} streamRef={streamRef} />
  
      <MuteButton streamRef={streamRef} />
      <RecordButton mode={mode} setMode={setMode} streamRef={streamRef} timer={timer} />
      <LocationButton /> 
  
      <ViewPort videoRef={videoRef} />
    </section>
  )
}

export default Camera
