import styles from './RegistrationButton.module.css'

function RegistrationButton() {

  const action = () => {
    // openRegistration
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
      onClick={onClick} 
      onKeyDown={onKeyDown} 
      type="button" 
      aria-label="create a new account">
      Sign Up
    </button>
  )
}

export default RegistrationButton
