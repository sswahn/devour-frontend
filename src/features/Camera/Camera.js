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
      if (!mounted) { // avoid race condition with stopCamra on unmount
        return camera.off(stream)
      }
      console.log('stream: ', stream)
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
      camera.off(streamRef.current) 
      streamRef.current = null
    }
  }

  const closeCamera = event => { // this conflicted with opening editor for some reason, consider removing it
    stopCamera()
    closeOverlay() 
    if (document.fullscreenElement) {
      document.exitFullscreen()
    }
  }

  useEffect(() => {
    if (isExpired) {
      stopCamera()
    }
  }, [isExpired])
  
  useEffect(() => {
    if (!streamRef.current) {
      startCamera()
    }
    return () => {
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
    <EditorButton openEditor={openEditor} />
   
    </section>
  )
}

export default Camera
