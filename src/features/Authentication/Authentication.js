import { useState } from 'react'
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

// this needs focus trap, and focus stack
// then overlayRef can be used with swipe to close
// also need onKeyDown Escape functionality

function Authentication({ closeAuthentication }) {
  return (
    <section className={styles.authentication}>
      <CloseButton overlay="authentication" close={closeAuthentication} />
      <LoginForm />
      <RegistrationButton />
      <GoogleButton />
      <AppleButton />
    </section>
  )
}

export default Authentication
