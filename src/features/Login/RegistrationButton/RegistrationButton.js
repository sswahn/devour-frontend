import { useRef, useEffect } from 'react'
import { overlay } from '../../../config'
import useOverlay from '../../../hooks/useOverlay'
import styles from './RegistrationButton.module.css'

function RegistrationButton() {
  const buttonRef = useRef(null)
  const { isActive, openOverlay, closeOverlay } = useOverlay()
  
  const action = () => {
    closeOverlay(overlay.register)
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
      id="register-passkey"
      className={styles.registrationButton} 
      ref={buttonRef}
      onClick={onClick} 
      onKeyDown={onKeyDown} 
      type="button" 
      aria-label="create a new account">
      Sign Up
    </button>
  )
}

export default RegistrationButton
