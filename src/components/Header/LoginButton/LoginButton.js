import { useRef } from 'react'
import { overlays } from '../../../config'
import useOverlay from '../../../hooks/useOverlay'
import RightToBracketIcon from '../../Icons/RightToBracketIcon/RightToBracketIcon'
import styles from './LoginButton.module.css'

function LoginButton() {
  const buttonRef = useRef(null)
  const { openOverlay } = useOverlay()
  
  const action = () => {
    openOverlay(overlays.authentication, buttonRef.current)  
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
