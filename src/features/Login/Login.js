import { useRef, useEffect } from 'react'
import { overlay } from '../../config'
import useOverlay from '../../hooks/useOverlay'
import useSwipeFromEdge from '../../hooks/useSwipeFromEdge'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'
import CloseButton from '../../components/CloseButton/CloseButton'
import LoginForm from './LoginForm/LoginForm'
import RegistrationButton from './RegistrationButton/RegistrationButton'
import GoogleButton from './GoogleButton/GoogleButton'
import AppleButton from './AppleButton/AppleButton'
import styles from './Login.module.css'

function Login() {
  const { closeOverlay } = useOverlay()
  const { onPointerDown, onPointerMove, onPointerUp, onPointerCancel } = useSwipeFromEdge(closeOverlay)
  const overlayRef = useRef()

  const onKeyDown = event => {
    if (event.key === 'Escape') {
      event.preventDefault()
      closeOverlay()
    }
  }
  
  return (
    <section 
      id={overlay.login} 
      className={styles.login} 
      ref={overlayRef} 
      onKeyDown={onKeyDown} 
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerCancel}
      aria-label="user login">
      <CloseButton overlay={overlay.login} close={action} />
      <LoginForm />
      <RegistrationButton />
      <GoogleButton />
      <AppleButton />
    </section>
  )
}

export default Login
