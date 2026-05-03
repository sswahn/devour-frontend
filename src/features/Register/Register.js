import { useState } from 'react'
import { api } from '../../config'
import styles from './Register.module.css'

function Register() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  
  const onClick = event => {
    navigator.vibrate?.(50)
  }

  const validate = data => {
    // validate data.username
    // validate data.contact (phone or email)
    // if invalid:
    // break onSubmit with throw error
  }

  const onSubmit = async event => {
    try {
      event.preventDefault()
      const formData = new FormData(event.target)
      const username = formData.get('username')
      const contact = formData.get('contact')
      validate({ username, contact }) // consider validating in onChange...
      const credentials = await navigator.credentials.create()
      const request = { username, contact, credentials }
      const response = await server.post(api.register, request)
      setMessage('Account successfully created.')
    } catch (error) {
      setErrorMessage(error)
    }
  }
  
  return (
    <form className={styles.registrationForm} onSubmit={onSubmit} aria-label="registration form">
      <label htmlFor="username">Username: <span aria-hidden="true">*</span></label>
      <input 
        id="username" 
        type="text" 
        name="username" 
        inputMode="username" 
        autoComplete="username webauthn" 
        minLength={2} 
        maxLength={50} 
        pattern="^[a-zA-Z0-9](?:[a-zA-Z0-9_]*[a-zA-Z0-9])?$" 
        title="Username must be alphanumeric characters and cannot start or end with an underscore."
        required
      />
      <label htmlFor="contact">Email or phone: <span aria-hidden="true">*</span></label>
      <input id="contact" type="text" name="contact" inputMode="email" required /> {/* phone or email (needs validation) */}
      <button onClick={onClick} type="submit">Sign Up</button>
    </form>
  )
}

export default Register
