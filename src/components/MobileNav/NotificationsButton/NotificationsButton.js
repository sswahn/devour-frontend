import { useRef } from 'react'
import useFocusStack from '../../../hooks/useFocusStack'
import BellIcon from '../../Icons/BellIcon/BellIcon'
import styles from './NotificationsButton.module.css'

function NotificationsButton({ openNotifications }) {
  const buttonRef = useRef(null)
  const { push } = useFocusStack()
  
  const action = () => {
    push(buttonRef.current)
    openNotifications()
  }
  
  const onClick = event => {
    navigator.vibrate(50)
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
