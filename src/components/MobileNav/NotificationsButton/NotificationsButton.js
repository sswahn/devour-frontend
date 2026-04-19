import useFocusStack from '../../hooks/useFocusStack'
import BellIcon from '../../Icons/BellIcon/BellIcon'
import styles from './NotificationsButton.module.css'

function NotificationsButton({ notificationsButtonRef, openNotifications }) {
  const { push } = useFocusStack()
  
  const action = () => {
    navigator.vibrate(50)
    push(notificationsButtonRef.current)
    openNotifications()
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
      className={styles.notificationsButton} 
      ref={notificationsButtonRef} 
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
