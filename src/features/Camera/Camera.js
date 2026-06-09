import { useState, useRef, useEffect } from 'react'
import { overlay } from '../../config'
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
  const { closeOverlay } = useOverlay
  const { footage, setFootage } = useFootage() // is duration needed in useFootage?
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
      // display error then close overlay or recover
      closeCamera()
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
      closeCamera()
    }
  }, [])

  const getVideoDuration = blob => {
    return new Promise((resolve, reject) => {
      const video = document.createElement('video')
      const cleanup = () => URL.revokeObjectURL(video.src)
      video.preload = 'metadata'
      video.onloadedmetadata = () => {
        cleanup()
        resolve(video.duration) // Time length in seconds
      }
      video.onerror = error => {
        cleanup()
        reject(error)
      }
      video.src = URL.createObjectURL(blob)
    })
  }

  const loadFromStorage = async () => {
    const db = database()
    const storage = await db.get('footage')
    
    console.log('storage: ', storage)
    
    if (storage) {
      const duration = await getVideoDuration(storage.footage)

      console.log('duration: ', duration)
      
      setFootage(storage.footage)
      setTimer(60 - duration)
    }
  }

  useEffect(() => {
    if (!footage) {
      loadFromStorage()
    }
  }, [])
  
  return (
    <section className={styles.camera}>
      <TopNav closeCamera={closeCamera} mode={mode} timer={timer} setTimer={setTimer} stopCamera={stopCamera} streamRef={streamRef} />
      <MuteButton streamRef={streamRef} />
      <EditorButton openEditor={openEditor} />
      <RecordButton mode={mode} setMode={setMode} streamRef={streamRef} timer={timer} />
      <ViewPort videoRef={videoRef} />
    </section>
  )
}

export default Camera
