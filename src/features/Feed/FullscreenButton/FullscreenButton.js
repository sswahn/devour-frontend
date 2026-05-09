import { useRef } from 'react'
import ExpandIcon from '../../../components/Icons/ExpandIcon/ExpandIcon'
import styles from './FullscreenButton.module.css'

function FullscreenButton({ isFullScreen }) {
  const buttonRef = useRef(null)

  const enterFullScreen = async () => {
    await buttonRef.current.closest('section').requestFullscreen()
    await screen.orientation?.lock?.('portrait')
  }

  const exitFullScreen = async () => {
    screen.orientation?.unlock?.()
    await document.exitFullscreen()
  }
  
  const onClick = event => {
    navigator.vibrate?.(50)
    !!document.fullscreenElement ? exitFullScreen() : enterFullScreen()
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
      <ExpandIcon /> {/* isFullScreen ? <ContractIcon /> : <ExpandIcon /> */}
    </button>
  )
}

export default FullscreenButton
