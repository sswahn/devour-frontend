import { useRef, useEffect } from 'react'
import ExpandIcon from '../../../components/Icons/ExpandIcon/ExpandIcon'
import styles from './FullscreenButton.module.css'

function FullscreenButton({ isPinch }) {
  const buttonRef = useRef(null)

  const zoomIn = async () => {
    const isZoomed = window.visualViewport.scale > 1
    const isFullscreen = document.fullscreenElement !== null
    if (pinch === 'out' && !isFullscreen && !isZoomed) {
      await document.getElementById('portal').requestFullscreen()
      await screen.orientation.lock('portrait')
    }
  }
  
  const zoomOut = async () => {
    const isZoomed = window.visualViewport.scale > 1
    const isFullscreen = document.fullscreenElement !== null
    if (pinch === 'in' && isFullscreen && !isZoomed) {
      await document.exitFullscreen()
      await screen.orientation.unlock()
    }
  } 

  const action = () => {
    document.fullscreenElement !== null ? zoomOut() : zoomIn()
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
    if (isPinch === 'out') {
      console.log('pinch === out: value::', isPinch)
      zoomIn()
    } else {
      console.log('pinch === in: value::', isPinch)
      zoomOut()
    }
  }

  useEffect(() => {
    gesture()
  }, [isPinch])
  
  return (
    <button 
      className={styles.fullscreenButton}
      onClick={onClick} 
      onKeyDown={onKeyDown} 
      ref={buttonRef} 
      type="button" 
      aria-label="enter fullscreen mode">
      <ExpandIcon />
    </button>
  )
}

export default FullscreenButton
