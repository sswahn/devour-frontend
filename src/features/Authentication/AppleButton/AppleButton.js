import AppleIcon from '../../../components/Icons/AppleIcon/AppleIcon'
import styles from './AppleButton.module.css'

function AppleButton() {

  const action = () => {
    // handle federated access with Apple
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
      className={styles.appleButton} 
      onClick={onClick} 
      onKeyDown={onKeyDown} 
      type="button" 
      aria-label="sign in with your apple account">
      <AppleIcon /> 
      <span>Continue with Apple</span>
    </button>
  )
}

export default AppleButton
