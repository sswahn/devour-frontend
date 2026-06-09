import { useRef } from 'react'
import { overlay } from '../../../config'
import useOverlay from '../../../hooks/useOverlay'
import PlusIcon from '../../Icons/PlusIcon/PlusIcon'
import styles from './CreateButton.module.css'

function CreateButton() {
  const buttonRef = useRef(null)
  const { openOverlay } = useOverlay()

  const openFullscreen = async () => {
    try {
      await document.getElementById('portal')?.requestFullscreen()
      await screen.orientation?.lock?.('portrait')
    } catch (error) {
      console.warn('Opening in fullscreen not supported on this device.')
    }
  }
 
  const onClick = async event => {
    navigator.vibrate?.(50)
    await openFullscreen()
    openOverlay(overlay.wizard, buttonRef.current)
  }
  
  return (
    <button 
      className={styles.createButton} 
      ref={buttonRef} 
      onClick={onClick} 
      type="button" 
      aria-label="open camera" 
      aria-haspopup="dialog">
      <PlusIcon size={32} />  
    </button>
  )
}

export default CreateButton
