import { useState } from 'react'
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
