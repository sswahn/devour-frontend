import { useRef } from 'react'
import { overlays } from '../../../config'
import useSession from '../../../hooks/useSession'
import useFocusStack from '../../../hooks/useFocusStack'
import useProfile from '../../../hooks/useProfile'
import useOverlay from '../../../hooks/useOverlay'
import UserIcon from '../../Icons/UserIcon/UserIcon'
import styles from './ProfileButton.module.css'

function ProfileButton() {
  const buttonRef = useRef(null)
  const { session } = useSession()
  const { push } = useFocusStack()
  const { setUserProfile } = useProfile()
  const { openOverlay } = useOverlay()
  
  const action = async () => {
    push(buttonRef.current)
    setUserProfile(session.username)
    openOverlay(overlay.profile)
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
