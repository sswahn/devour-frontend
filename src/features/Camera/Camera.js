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
 
  const startCamera = async () => {
    try {
      const stream = await camera.on()
      streamRef.current = stream
      videoRef.current.srcObject = stream

      // const caps = camera.getCapabilities(stream)
      // alert(JSON.stringify(caps))
    
    } catch (error) {
      // display error then close overlay or recover
      alert('Error accessing camera.')
      console.error('Error: ', error)
      throw error
      // closeCamera()
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
    closeOverlay()
    if (document.fullscreenElement) {
      document.exitFullscreen()
    }
  }
  
  useEffect(() => {
    if (!streamRef.current) {
      startCamera()
    }
    return () => {
     // closeCamera()
      stopCamera()
    }
  }, [])

  const loadFromStorage = async () => {
    const db = database()
    const storage = await db.get('footage')

    if (storage?.footage.length > 0) {
      const totalDuration = storage.footage.reduce((acc, val) => acc + val.duration, 0)
      const timeRemaining = Math.ceil(60 - totalDuration)

      console.log('totalDuration: ', totalDuration)
      console.log('timeRemaining: ', timeRemaining)
      
      setFootage(storage.footage)
      setTimer(timeRemaining)
    }
  }

  useEffect(() => {
    if (!footage.length) {
      loadFromStorage()
    }
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
