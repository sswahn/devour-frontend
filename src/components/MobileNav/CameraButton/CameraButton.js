import { useRef } from 'react'
import useFocusStack from '../../../hooks/useFocusStack'
import PlusIcon from '../../Icons/PlusIcon/PlusIcon'
import styles from './CameraButton.module.css'

function CameraButton({ openCamera }) {
  const buttonRef = useRef(null)
  const { push } = useFocusStack()
  
  const action = async () => {
    return;
   
    // await document.getElementById('portal').requestFullscreen()
    // await screen.orientation.lock('portrait')
    push(buttonRef.current)
    openCamera()
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
  
  return (
    <button 
      className={styles.cameraButton} 
      ref={buttonRef} 
      onClick={onClick} 
      onKeyDown={onKeyDown}
      type="button" 
      aria-label="open camera" 
      aria-haspopup="dialog">
      <PlusIcon size={32} />  
    </button>
  )
}

export default CameraButton
