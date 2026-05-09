import { useRef } from 'react'
import ExpandIcon from '../../../components/Icons/ExpandIcon/ExpandIcon'
import styles from './FullscreenButton.module.css'

function FullscreenButton({ isFullScreen, enterFullScreen, exitFullScreen }) {
  const buttonRef = useRef(null)
  
  const onClick = event => {
    navigator.vibrate?.(50)
    console.log('FullScreenButton onClick: !document.fullscreenElement: ', !document.fullscreenElement)
    !document.fullscreenElement ? enterFullScreen() : exitFullScreen() 
  }

  // button needs to toggle icon from expand to contract, 
  // have aria pressed, and label accordingly.
  
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
