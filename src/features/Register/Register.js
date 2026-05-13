import { useState } from 'react'
import { api } from '../../config'
import Input from '../../components/Input/Input'
import styles from './Register.module.css'

function Register() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

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

    return setMessage('Account successfully created.')
    
    try {
      event.preventDefault()
      navigator.vibrate?.(50)
      const formData = new FormData(event.target)
      const username = formData.get('username')
      const contact = formatContact(formData.get('contact'))
      const credentials = await navigator.credentials.create()
      const request = { username, contact, credentials }
      const response = await server.post(api.register, request)
      setMessage('Account successfully created.')
    } catch (error) {
      setErrorMessage(error)
    }
  }

  return (
    <section id={overlay.login} className={styles.login} ref={overlayRef} role="dialog" aria-modal="true" aria-label="user registration">
      <div onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} onPointerCancel={onPointerCancel}>
        <form className={styles.registrationForm} onSubmit={onSubmit} aria-label="registration form">
          <Input 
            id="username"
            type="text"
            label="Username"
            inputMode="email"
            autoComplete="username webauthn"
            autoCapitalize="none"
            minLength={2} 
            maxLength={50} 
            pattern="^[a-zA-Z0-9](?:[a-zA-Z0-9_]*[a-zA-Z0-9])?$" 
            title="Username must be between 2 and 50 alphanumeric characters and cannot start or end with an underscore."
            required />
          <Input 
            id="contact"
            type="text"
            label="Email or phone"
            inputMode="email"
            autoComplete="username webauthn"
            autoCapitalize="none"
            pattern="^([^@\s]+@[^@\s]+\.[^@\s]+|\+?[\d\s\-()]{7,15})$"
            title="Please enter a valid email address or an international phone number (e.g., +1 234 567 8900)."
            required />
          <button type="submit" disbled={!!message}>Sign Up</button>
          {message && <div role="alert">{message}</div>}
        </form>
      </div>
    </section>
  )
}

export default Register
