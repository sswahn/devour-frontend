import { useState, useEffect } from 'react'
import PlayIcon from '../../../components/Icons/PlayIcon/PlayIcon'
import PauseIcon from '../../../components/Icons/PauseIcon/PauseIcon'
import styles from './PauseButton.module.css'

function PauseButton({ videoRef }) {
  const [pause, setPause] = useState(false)
    
  const togglePause = event => {
    navigator.vibrate?.(50)
    pause ? videoRef.current.play() : videoRef.current.pause()
    setPause(prev => !prev) 
  }

  const onEnded = () => {
    setPause(true)
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
      aria-label={`${pause ? 'play' : 'pause'} video`} 
      aria-controls="video-editor">
      {pause ? <PlayIcon /> : <PauseIcon />}
    </button>
  )
}

export default PauseButton
