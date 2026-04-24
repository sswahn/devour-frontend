import { useRef } from 'react'
import { overlays } from '../../../config'
import useOverlay form '../../hooks/useOverlay'
import useFocusStack from '../../../hooks/useFocusStack'
import BellIcon from '../../Icons/BellIcon/BellIcon'
import styles from './NotificationsButton.module.css'

function NotificationsButton() {
  const buttonRef = useRef(null)
  const { push } = useFocusStack()
  const { openOverlay } = useOverlay()
  
  const action = () => {
    push(buttonRef.current)
    openOverlay(overlays.notifications)
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
      className={styles.notificationsButton} 
      ref={buttonRef} 
      onClick={onClick} 
      onKeyDown={onKeyDown}
      type="button" 
      aria-label="open notifications" 
      aria-haspopup="dialog">
      <BellIcon />
      <div role="status" aria-label="notification indicator" aria-hidden="false"></div>
    </button>
  )
}

export default NotificationsButton
