import { useRef } from 'react'
import { overlay } from '../../../config'
import useOverlay from '../../../hooks/useOverlay'
import PlusIcon from '../../Icons/PlusIcon/PlusIcon'
import styles from './CameraButton.module.css'

function CameraButton() {
  const buttonRef = useRef(null)
  const { openOverlay } = useOverlay()
 
  const onClick = async event => {
    navigator.vibrate?.(50)
    await document.getElementById('portal').requestFullscreen()
    if ('orientation' in screen && 'lock' in screen.orientation) {
      await screen.orientationlock('portrait')
    }
    openOverlay(overlay.camera, buttonRef.current)
  }
  
  return (
    <button 
      className={styles.cameraButton} 
      ref={buttonRef} 
      onClick={onClick} 
      type="button" 
      aria-label="open camera" 
      aria-haspopup="dialog">
      <PlusIcon size={32} />  
    </button>
  )
}

export default CameraButton
