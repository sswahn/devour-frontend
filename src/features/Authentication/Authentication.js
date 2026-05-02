import { useEffect } from 'react'
import { overlays } from '../../config'
import useOverlay from '../../hooks/useOverlay'
import useFocusTrap from '../../hooks/useFocusTrap'
import useSwipeFromEdge from '../../hooks/useSwipeFromEdge'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'
import CloseButton from '../../components/CloseButton/CloseButton'
import LoginForm from './LoginForm/LoginForm'
import RegistrationButton from './RegistrationButton/RegistrationButton'
import GoogleButton from './GoogleButton/GoogleButton'
import AppleButton from './AppleButton/AppleButton'
import styles from './Authentication.module.css'

function Authentication() {
  const {overlayRef, focusRef} = useFocusTrap()
  const { closeOverlay } = useOverlay()
  const { onPointerDown, onPointerMove, onPointerUp, onPointerCancel } = useSwipeFromEdge(closeOverlay)

  const action = () => {
    closeOverlay()
  }

  const onKeyDown = event => {
    if (event.key === 'Escape') {
      event.preventDefault()
      action()
    }
  }
  
  return (
    <section 
      id={overlays.authentication} 
      className={styles.authentication} 
      ref={focusRef} 
      onKeyDown={onKeyDown} 
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerCancel}
      aria-label="user authentication">
      <CloseButton overlay={overlays.authentication} close={action} />
      <LoginForm />
      <RegistrationButton />
      <GoogleButton />
      <AppleButton />
    </section>
  )
}

export default Authentication
