import { useRef } from 'react'
import useFocusStack from '../../../hooks/useFocusStack'
import ExpandIcon from '../../../components/Icons/ExpandIcon/ExpandIcon'
import styles './FullscreenButton.module.css'

function FullscreenButton({ openFeed }) {
  const { push } = useFocusStack()
  const buttonRef = useRef(null)
  
  const action = async () => {
    navigator.vibrate(50)
    await document.getElementById('portal').requestFullscreen()
    await screen.orientation.lock('portrait')
    push(buttonRef.current)
    openFeed()

    // make sure current video focused
  }
  
  const onClick = event => {
    action()
  }
  
  const onKeyDown = event => {
    if (event.key === 'Enter') {
      event.preventDefault()
      action()
    }
  }
  
  return (
    <button 
      className={styles.fullscreenButton}
      onClick={onClick} 
      onKeyDown={onKeyDown} 
      ref={buttonRef} 
      type="button" 
      aria-label="enter fullscreen mode">
      <FullscreenIcon />
    </button>
  )
}

export default FullscreenButton
