import { useRef } from 'react'
import useSession from '../../../hooks/useSession'
import useFocusStack from '../../../hooks/useFocusStack'
import UserIcon from '../../Icons/UserIcon/UserIcon'
import styles from './ProfileButton.module.css'

function ProfileButton({ openProfile }) {
  const buttonRef = useRef(null)
  const { session } = useSession()
  const { push } = useFocusStack()
  
  const action = async () => {
    push(buttonRef.current)
    openProfile(session.username)
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
      className={styles.profileButton} 
      ref={buttonRef} 
      onClick={onClick} 
      onKeyDown={onKeyDown}
      type="button" 
      aria-label="open profile" 
      aria-haspopup="dialog">
      <UserIcon />  
    </button>
  )
}

export default ProfileButton
