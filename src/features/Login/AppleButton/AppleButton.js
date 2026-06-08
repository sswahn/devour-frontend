import AppleIcon from '../../../components/Icons/AppleIcon/AppleIcon'
import styles from './AppleButton.module.css'

function AppleButton() {

  const onClick = event => {
    navigator.vibrate?.(50)
    // handle federated access with Apple
  }
  
  return (
    <button className={styles.appleButton} onClick={onClick} type="button" aria-label="sign in with your apple account">
      <AppleIcon /> 
      <span>Continue with Apple</span>
    </button>
  )
}

export default AppleButton
