import { useEffect } from 'react'
import useFocusStack from '../../hooks/useFocusStack'
import useFocusTrap from '../../hooks/useFocusTrap'
import useSwipeToClose from '../../hooks/useSwipeToClose'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'
import CloseButton from '../../components/CloseButton/CloseButton'
import LoginForm from './LoginForm/LoginForm'
import RegistrationButton from './RegistrationButton/RegistrationButton'
import GoogleButton from './GoogleButton/GoogleButton'
import AppleButton from './AppleButton/AppleButton'
import styles from './Authentication.module.css'

function Authentication({ closeAuthentication }) {
  const { pop } = useFocusStack()
  const {overlayRef, focusRef} = useFocusTrap()
  const swipeToClose = useSwipeToClose()

  const action = () => {
    closeAuthentication()
    pop()
  }

  const gesture = () => {
    if (overlayRef.current && action) {
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
    <section className={styles.authentication} ref={focusRef} onKeyDown={onKeyDown}>
      <CloseButton overlay="authentication" close={closeAuthentication} />
      <LoginForm />
      <RegistrationButton />
      <GoogleButton />
      <AppleButton />
    </section>
  )
}

export default Authentication
