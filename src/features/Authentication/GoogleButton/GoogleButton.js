import GoogleIcon from '../../../components/Icons/GoogleIcon/GoogleIcon'
import styles from './GoogleButton.module.css'

function GoogleButton() {

  const action = () => {
    // handle federated access with Google
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
      className={styles.googleButton} 
      onClick={onClick} 
      onKeyDown={onKeyDown} 
      type="button" 
      aria-label="sign in with your google account">
      <GoogleIcon /> 
      <span>Continue with Google</span>
    </button>
  )
}

export default GoogleButton
