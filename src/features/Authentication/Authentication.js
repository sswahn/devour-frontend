import { useEffect } from 'react'
import { overlays } from '../../config'
import useOverlay from '../../hooks/useOverlay'
import useFocusTrap from '../../hooks/useFocusTrap'
import useSwipeToClose from '../../hooks/useSwipeToClose'
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
  const swipeToClose = useSwipeToClose()

  const action = () => {
    closeOverlay()
  }

  const gesture = () => {
    if (overlayRef.current && action) {
      navigator.vibrate?.(50)
      swipeToClose(overlayRef.current, action)
    }
  }

  const onKeyDown = event => {
    if (event.key === 'Escape') {
      event.preventDefault()
      action()
    }
  }
  
  useEffect(() => {
    gesture()
  }, [])
  
  return (
    <section id={overlays.authentication} className={styles.authentication} ref={focusRef} onKeyDown={onKeyDown} aria-label="user authentication">
      <CloseButton overlay={overlays.authentication} close={action} />
      <LoginForm />
      <RegistrationButton />
      <GoogleButton />
      <AppleButton />
    </section>
  )
}

export default Authentication
