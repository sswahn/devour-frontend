import { useRef } from 'react'
import { overlays } from '../../../config'
import useOverlay from '../../../hooks/useOverlay'
import BellIcon from '../../Icons/BellIcon/BellIcon'
import styles from './NotificationsButton.module.css'

function NotificationsButton() {
  const buttonRef = useRef(null)
  const { openOverlay } = useOverlay()
  
  const onClick = event => {
    navigator.vibrate?.(50)
    openOverlay(overlays.notifications, buttonRef.current)
  }
  
  return (
    <button 
      className={styles.notificationsButton} 
      ref={buttonRef} 
      onClick={onClick}
      type="button" 
      aria-label="open notifications" 
      aria-haspopup="dialog">
      <BellIcon />
      <div role="status" aria-label="notification indicator" aria-hidden="false"></div>
    </button>
  )
}

export default NotificationsButton
