import { useRef, useEffect } from 'react'
//import useFocusStack from '../../../hooks/useFocusStack'
import ExpandIcon from '../../../components/Icons/ExpandIcon/ExpandIcon'
import styles from './FullscreenButton.module.css'

function FullscreenButton({ isPinch }) {
//  const { push } = useFocusStack()
  const buttonRef = useRef(null)
  
  const action = async () => {
    await document.getElementById('portal').requestFullscreen()
    await screen.orientation.lock('portrait')
//    push(buttonRef.current)
    openFeed()

    // make sure current video focused
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
    if (isPinch === 'out') {
      navigator.vibrate?.(50)
      console.log('pinch === out: value::', isPinch)
    } else {
      navigator.vibrate?.(50)
      console.log('pinch === in: value::', isPinch)
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
