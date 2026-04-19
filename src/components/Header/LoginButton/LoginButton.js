import useFocusStack from '../../../hooks/useFocusStack'
import RightToBracketIcon from '../../Icons/RightToBracketIcon/RightToBracketIcon'
import styles from './LoginButton.module.css'

function LoginButton({ authenticationButtonRef, openAuthentication }) {
  const { push } = useFocusStack()
  
  const action = () => {
    navigator.vibrate(50)
    push(authenticationButtonRef.current)
    openAuthentication()  
  }
  
  const onClick = event => {
    action()
  }
  
  const onKeyDown = event => {
    if (event.key === 'Enter') {
      event.preventDefault()
      action()
    }
  }
  
  return (
    <button className={styles.loginButton} onClick={onClick} onKeyDown={onKeyDown} ref={authenticationButtonRef} type="button" aria-label="sign in">
      <RightToBracketIcon />
    </button>
  )
}

export default LoginButton
