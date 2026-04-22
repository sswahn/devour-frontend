import { useRef } from 'react'
import useFocusStack from '../../../hooks/useFocusStack'
import RightToBracketIcon from '../../Icons/RightToBracketIcon/RightToBracketIcon'
import styles from './LoginButton.module.css'

function LoginButton({ openAuthentication }) {
  const buttonRef = useRef(null)
  const { push } = useFocusStack()
  
  const action = () => {
    push(buttonRef.current)
    openAuthentication()  
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
    <button className={styles.loginButton} ref={buttonRef} onClick={onClick} onKeyDown={onKeyDown} type="button" aria-label="sign in">
      <RightToBracketIcon />
    </button>
  )
}

export default LoginButton
