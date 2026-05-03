import { useRef, useEffect } from 'react'
import ExpandIcon from '../../../components/Icons/ExpandIcon/ExpandIcon'
import styles from './FullscreenButton.module.css'

function FullscreenButton({ isPinch }) {
  const buttonRef = useRef(null)

  const zoomIn = async () => {
    await document.getElementById('portal').requestFullscreen()
    await screen.orientation.lock('portrait')
  }
  
  const zoomOut = async () => {
    await document.exitFullscreen()
    await screen.orientation.unlock()
  } 

  const action = () => {
    const isZoomed = window.visualViewport.scale > 1
    const isFullscreen = document.fullscreenElement !== null
    !isFullscreen ? !isZoomed && zoomIn() : !isZoomed && zoomOut()
  }
  
  const onClick = event => {
    navigator.vibrate?.(50)
    action()
  }
  
  const onKeyDown = event => {
    if (event.key === 'Enter') {
      event.preventDefault()
      action()
    }
  }

  const gesture = () => {
    navigator.vibrate?.(50)
    const isZoomed = window.visualViewport.scale > 1
    const isFullscreen = document.fullscreenElement !== null
    if (isPinch === 'out') {
      !isFullscreen && !isZoomed && zoomIn()
    } else {
      isFullscreen && !isZoomed && zoomOut()
    }
  }

  useEffect(() => {
    gesture()
  }, [isPinch])
  
  return (
    <button 
      className={styles.fullscreenButton}
      ref={buttonRef} 
      onClick={onClick} 
      onKeyDown={onKeyDown} 
      type="button" 
      aria-label="enter fullscreen mode">
      <ExpandIcon />
    </button>
  )
}

export default FullscreenButton
