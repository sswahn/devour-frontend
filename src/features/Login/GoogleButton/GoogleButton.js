import GoogleIcon from '../../../components/Icons/GoogleIcon/GoogleIcon'
import styles from './GoogleButton.module.css'

function GoogleButton() {
  
  const onClick = event => {
    navigator.vibrate?.(50)
    // handle federated access with Google
  }
  
  return (
    <button className={styles.googleButton} onClick={onClick} type="button" aria-label="sign in with your google account">
      <GoogleIcon /> 
      <span>Continue with Google</span>
    </button>
  )
}

export default GoogleButton
