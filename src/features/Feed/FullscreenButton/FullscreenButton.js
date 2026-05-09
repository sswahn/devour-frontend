import { useRef } from 'react'
import ExpandIcon from '../../../components/Icons/ExpandIcon/ExpandIcon'
import styles from './FullscreenButton.module.css'

function FullscreenButton({ toggleFullScreenMode }) {
  const buttonRef = useRef(null)
  
  const onClick = event => {
    navigator.vibrate?.(50)
    toggleFullScreenMode()
  }
  
  return (
    <button 
      className={styles.fullscreenButton}
      ref={buttonRef} 
      onClick={onClick} 
      type="button" 
      aria-label="enter fullscreen mode">
      <ExpandIcon />
    </button>
  )
}

export default FullscreenButton
