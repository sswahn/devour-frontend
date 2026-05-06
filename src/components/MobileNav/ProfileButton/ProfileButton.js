import { useRef } from 'react'
import { overlay } from '../../../config'
import useSession from '../../../hooks/useSession'
import useProfile from '../../../hooks/useProfile'
import useOverlay from '../../../hooks/useOverlay'
import UserIcon from '../../Icons/UserIcon/UserIcon'
import styles from './ProfileButton.module.css'

function ProfileButton() {
  const buttonRef = useRef(null)
  const { session } = useSession()
  const { setUserProfile } = useProfile()
  const { openOverlay } = useOverlay()
  
  const onClick = event => {
    navigator.vibrate?.(50)
    setUserProfile(session.username)
    openOverlay(overlay.profile, buttonRef.current)
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
