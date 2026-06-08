import { overlay } from '../../config'
import useOverlay from '../../hooks/useOverlay'
import useSwipeFromEdge from '../../hooks/useSwipeFromEdge'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'
import BackButton from '../../components/BackButton/BackButton'
import LoginForm from './LoginForm/LoginForm'
import RegistrationButton from './RegistrationButton/RegistrationButton'
import GoogleButton from './GoogleButton/GoogleButton'
import AppleButton from './AppleButton/AppleButton'
import styles from './Login.module.css'

function Login() {
  const { closeOverlay } = useOverlay()
  const { onPointerDown, onPointerMove, onPointerUp, onPointerCancel } = useSwipeFromEdge(closeOverlay)
  
  const onKeyDown = event => {
    if (event.key === 'Escape') {
      event.preventDefault()
      closeOverlay()
    }
  }
  
  return (
    <section id={overlay.login} className={styles.login} onKeyDown={onKeyDown} role="dialog" aria-modal="true" aria-label="user login">
      <div onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} onPointerCancel={onPointerCancel}>
        <BackButton overlay={overlay.login} close={closeOverlay} />
        <LoginForm />
        <RegistrationButton />
        <GoogleButton />
        <AppleButton />
      </div>
    </section>
  )
}

export default Login
