import { useRef } from 'react'
import ExpandIcon from '../../../components/Icons/ExpandIcon/ExpandIcon'
import styles from './FullscreenButton.module.css'

function FullscreenButton() {
  const buttonRef = useRef(null)

  const open = async () => {
    await document.getElementById('portal').requestFullscreen()
    await screen.orientation.lock('portrait')
  }
  
  const close = async () => {
    await document.exitFullscreen()
    await screen.orientation.unlock()
  } 

  const action = () => {
    const isFullscreen = document.fullscreenElement !== null
    !isFullscreen ? open() : close()
  }
  
  const onClick = event => {
    navigator.vibrate?.(50)
    action()
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
