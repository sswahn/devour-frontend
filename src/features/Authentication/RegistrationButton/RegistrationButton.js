import styles from './RegistrationButton.module.css'

function RegistrationButton() {

  const action = () => {
    // navigation.credentials.create()
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

  // Need to register username or email, with backend.
  // That means another UI.
  // Probably needs a registration success page too.
  
  return (
    <button 
      id="register-passkey"
      className={styles.registrationButton} 
      onClick={onClick} 
      onKeyDown={onKeyDown} 
      type="button" 
      aria-label="create a new account">
      Sign Up
    </button>
  )
}

export default RegistrationButton
