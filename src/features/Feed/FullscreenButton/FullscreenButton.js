import { useRef } from 'react'
import MaximizeIcon from '../../../components/Icons/MaximizeIcon/MaximizeIcon'
import MinimizeIcon from '../../../components/Icons/MinimizeIcon/MinimizeIcon'
import styles from './FullscreenButton.module.css'

function FullscreenButton({ isFullScreen, enterFullScreen, exitFullScreen }) {
  const buttonRef = useRef(null)
  
  const onClick = event => {
    navigator.vibrate?.(50)
    !document.fullscreenElement ? enterFullScreen() : exitFullScreen() 
  }

  // button needs to toggle icon from expand to contract, 
  // have aria pressed, and label accordingly.
  
  return (
    <button className={styles.fullscreenButton} ref={buttonRef} onClick={onClick} type="button" aria-label="enter fullscreen mode">
      {isFullScreen ? <MinimizeIcon /> : <MaximizeIcon />}
    </button>
  )
}

export default FullscreenButton
