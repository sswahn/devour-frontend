import { useRef } from 'react'
import { overlay } from '../../../config'
import useOverlay from '../../../hooks/useOverlay'
import RightToBracketIcon from '../../Icons/RightToBracketIcon/RightToBracketIcon'
import styles from './LoginButton.module.css'

function LoginButton() {
  const buttonRef = useRef(null)
  const { openOverlay } = useOverlay()
  
  const onClick = event => {
    navigator.vibrate?.(50)
    openOverlay(overlay.login, buttonRef.current)  
  }
  
  return (
    <button className={styles.loginButton} ref={buttonRef} onClick={onClick} type="button" aria-label="sign in">
      <RightToBracketIcon />
    </button>
  )
}

export default LoginButton
