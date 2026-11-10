import { useState, useRef, useEffect } from 'react'
import useOverlay from '../../hooks/useOverlay'
import useFootage from '../../hooks/useFootage'
import camera from '../../utilities/camera'
import TopNav from './TopNav/TopNav'
import EditorButton from './EditorButton/EditorButton'
import RecordButton from './RecordButton/RecordButton'
import MuteButton from './MuteButton/MuteButton'
import ViewPort from './ViewPort/ViewPort'
import styles from './Camera.module.css'

function Camera({ openEditor }) {
  const { closeOverlay } = useOverlay()
  const { footage } = useFootage()
  const [mode, setMode] = useState('off')
  const [isExpired, setIsExpired] = useState(false)
  const streamRef = useRef(null)
  const videoRef = useRef(null)
  let mounted = true
 
  const startCamera = async () => {
    try {
      const stream = await camera.on()
      if (!mounted) { // avoids race condition with stopCamra on unmount
        // return camera.off(stream) // turned this off for debugging fullscreen in desktop
      }
      streamRef.current = stream
      videoRef.current.srcObject = stream
    } catch (error) {
      alert('Error accessing camera.') // display error then close overlay or recover
      throw error
      // closeCamera()
    }
  }

  const stopCamera = event => {
    if (streamRef.current) {
      
      console.log('turning camera off. next should be unmounting.')
      
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
    if (isExpired) {
      console.log('stopping camera because isExpired is true in Camera component.')
      stopCamera()
    }
  }, [isExpired])
  
  useEffect(() => {
    if (!streamRef.current) {
      startCamera()
    }
    return () => {
      console.log('unmounting Camera.')
      mounted = false
      stopCamera()
    }
  }, [])
  
  return (
    <section className={styles.camera}>
      <TopNav closeCamera={closeCamera} mode={mode} setIsExpired={setIsExpired} streamRef={streamRef} />
      <MuteButton streamRef={streamRef} />
      <ViewPort videoRef={videoRef} />
      <RecordButton mode={mode} setMode={setMode} streamRef={streamRef} isExpired={isExpired} />
      {/* footage.length > 0 && */ }
    <EditorButton openEditor={() => { // break this out into a function
      stopCamera()
      openEditor()
    }} />
   
    </section>
  )
}

export default Camera
