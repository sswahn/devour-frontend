import { useState, useEffect } from 'react'
import PlayIcon from '../../../components/Icons/PlayIcon/PlayIcon'
import PauseIcon from '../../../components/Icons/PauseIcon/PauseIcon'
import styles from './PauseButton.module.css'

function PauseButton({ videoRef }) {
  const [isPaused, setIsPaused] = useState(false)
    
  const togglePause = event => {
    navigator.vibrate?.(50)
    isPaused ? videoRef.current.play() : videoRef.current.pause()
    setIsPaused(prev => !prev) 
  }

  const onEnded = () => {
    setIsPaused(true)
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) {
      return 
    }
    video.addEventListener('ended', onEnded)
    return () => {
      video.removeEventListener('ended', onEnded)
    }
  }, [])
  
  return (
    <button 
      className={styles.pauseButton} 
      onClick={togglePause} 
      type="button" 
      aria-label={`${isPaused ? 'play' : 'pause'} video`} 
      aria-controls="video-editor">
      {isPaused ? <PlayIcon /> : <PauseIcon />}
    </button>
  )
}

export default PauseButton
