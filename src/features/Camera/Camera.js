import { useState, useRef, useEffect } from 'react'
import { overlay } from '../../config'
import camera from '../../utilities/camera'
import ViewPort from './ViewPort/ViewPort'
import BackButton from '../../components/BackButton/BackButton'
import RecordTimer from './RecordTimer/RecordTimer'
import LightButton from './LightButton/LightButton'
import MuteButton from './MuteButton/MuteButton'
import RecordButton from './RecordButton/RecordButton'
import LocationButton from './LocationButton/LocationButton'
import styles from './Camera.module.css'

function Camera() {
  const [mode, setMode] = useState('off')
  const [timer, setTimer] = useState(60)
  const streamRef = useRef(null)
  const videoRef = useRef(null)
 
  const startCamera = async () => {
    try {
      console.log('fireing camera.on()')
      
      const stream = await camera.on()
      streamRef.current = stream
      videoRef.current.srcObject = stream

      console.log('stream set')
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
    console.log('firing in useEffect')
    if (!streamRef.current) {
      console.log('in useEffect condition, starting Camera: ')
      startCamera()
    }
    return () => {
      stopCamera()
    }
  }, [])
  
  return (
    <section className={styles.camera}>
      <BackButton overlay={overlay.camera} close={closeCamera} />
      <RecordTimer mode={mode} timer={timer} setTimer={setTimer} stopCamera={stopCamera} />
      <LightButton streamRef={streamRef} />
  
      <MuteButton streamRef={streamRef} />
      <RecordButton mode={mode} setMode={setMode} streamRef={streamRef} timer={timer} />
      <LocationButton /> 
  
      <ViewPort videoRef={videoRef} />
    </section>
  )
}

export default Camera
