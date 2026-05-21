import { useState, useRef, useEffect } from 'react'
import camera from '../../utilities/camera'
import ViewPort from './ViewPort/ViewPort'
import BackButton from './BackButton/BackButton'
import RecordTimer from './RecordTimer/RecordTimer'
import LightButton from './LightButton/LightButton'
import MuteButton from './MuteButton/MuteButton'
import RecordButton from './RecordButton/RecordButton'
import LocationButton from './LocationButton/LocationButton'
import styles from './camera.module.css'

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
  
  useEffect(() => {
    if (!streamRef.current) {
      startCamera()
    }
    return () => {
      stopCamera()
    }
  }, [])
  
  return (
    <section className={styles.camera}>
      <BackButton stopCamera={stopCamera} />
      <RecordTimer timer={timer} setTimer={setTimer} />
      <LightButton streamRef={streamRef} />
  
      <MuteButton streamRef={streamRef} />
      <RecordButton streamRef={streamRef} timer={timer} />
      <LocationButton /> 
  
      <ViewPort videoRef={videoRef} />
    </section>
  )
}

export default Camera
