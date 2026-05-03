import { useState } from 'react'
import { api } from '../../config'
import styles from './Register.module.css'

function Register() {
  const [data, setData] = useState([])
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

  // highlight fields with red border when input is invalid.
  // also dynamically add aria-invalid="true" only when invalid, remove once valid.
  
  return (
    <form className={styles.registrationForm} onSubmit={onSubmit} aria-label="registration form">
      <label htmlFor="username">Username: <span aria-hidden="true">*</span></label>
      <input 
        id="username" 
        type="text" 
        name="username" 
        autoComplete="username webauthn" 
        autoCapitalize="none"
        minLength={2} 
        maxLength={50} 
        pattern="^[a-zA-Z0-9](?:[a-zA-Z0-9_]*[a-zA-Z0-9])?$" 
        title="Username must be between 2 and 50 alphanumeric characters and cannot start or end with an underscore."
        required />
      <label htmlFor="contact">Email or phone: <span aria-hidden="true">*</span></label>
      <input 
        id="contact" 
        type="text" 
        name="contact" 
        inputMode="email"
        autoCapitalize="none"
        pattern="^([^@\s]+@[^@\s]+\.[^@\s]+|\+?[\d\s\-()]{7,15})$"
        title="Please enter a valid email address or an international phone number (e.g., +1 234 567 8900)."
        required />
      <button type="submit">Sign Up</button>
    </form>
  )
}

export default Register
