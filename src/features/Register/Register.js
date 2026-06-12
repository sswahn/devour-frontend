import { useState } from 'react'
import { overlay, api } from '../../config'
import validate from '../../utilities/validate'
import useOverlay from '../../hooks/useOverlay'
import useSwipeFromEdge from '../../hooks/useSwipeFromEdge'
import BackButton from '../../components/BackButton/BackButton'
import Input from '../../components/Input/Input'
import SubmitButton from './SubmitButton/SubmitButton'
import styles from './Register.module.css'

function Register() {
  
  console.log('Register Component.')
  
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const { openOverlay, closeOverlay } = useOverlay()
  const { onPointerDown, onPointerMove, onPointerUp, onPointerCancel } = useSwipeFromEdge(closeOverlay)

  const openLogin = () => {
    openOverlay(overlay.login, null)  
  }
  
  const formatContact = value => {
    const input = value.trim()
    if (input.includes('@')) {
      return input.toLowerCase()
    }
    // Remove everything except digits, but keep a leading '+' if present.
    const hasPlus = input.startsWith('+')
    const digits = input.replace(/\D/g, '') // Removes all non-digit characters
    return hasPlus ? `+${digits}` : digits
  }

  const onSubmit = async event => {    
    try {
      event.preventDefault()
      navigator.vibrate?.(50)
      setLoading(true)
      const formData = new FormData(event.target)
      const username = validate.username(formData.get('username'))
      const contact = formatContact(validate.contact(formData.get('contact')))
      const credentials = await navigator.credentials.create()
      const request = { username, contact, credentials }
      // const response = await server.post(api.register, request)
      setMessage('Account successfully created.')
    } catch (error) {
      setErrorMessage(error) // this should be a generic error.
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id={overlay.register} className={styles.register} role="dialog" aria-modal="true" aria-label="user registration">
      <div onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} onPointerCancel={onPointerCancel}>
        <BackButton overlay={overlay.register} close={openLogin} />
        <form onSubmit={onSubmit} aria-label="registration form">
          <Input 
            id="username"
            type="text"
            label="Username"
            inputMode="email"
            autoComplete="username webauthn"
            autoCapitalize="none"
            required />
          <Input 
            id="contact"
            type="text"
            label="Email or phone"
            inputMode="email"
            autoComplete="email tel"
            autoCapitalize="none"
            required />
          <SubmitButton disabled={loading || !!message} />
          {message && <div className={styles.success} role="alert">{message}</div>}
          {errorMessage && <div className={styles.danger} role="alert">{errorMessage}</div>}
        </form>
      </div>
    </section>
  )
}

export default Register
