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

  const handleVideoEnded = () => {
    console.log('video ended. changing button state.')
    setPause(true)
  }

  useEffect(() => {
    const video = videoRef.current
    video?.addEventListener('ended', handleVideoEnded)
    return () => {
      video?.removeEventListener('ended', handleVideoEnded)
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
