import { useRef } from 'react'
import { overlay } from '../../../config'
import useOverlay from '../../../hooks/useOverlay'
import styles from './RegistrationButton.module.css'

function RegistrationButton() {
  const buttonRef = useRef(null)
  const { openOverlay } = useOverlay()
  
  const onClick = event => {
    navigator.vibrate?.(50)
    openOverlay(overlay.register, buttonRef.current)
  }

  return (
    <button id="register-passkey" className={styles.registrationButton} ref={buttonRef} onClick={onClick} type="button" aria-label="create a new account">
      Sign Up
    </button>
  )
}

export default RegistrationButton
