import { useState } from 'react'
import styles from './Register.module.css'

function Register() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)
  
  const onClick = event => {
    navigator.vibrate?.(50)
  }

  const validate = data => {
    // validate username
    // validate phone/email
    // if invalid:
    // break onSubmit with throw error
  }

  const onSubmit = event => {
    try {
    event.preventDefault()
    const formData = new FormData(event.target)
    const request = {
      username: formData.get('username'),
      contact: formData.get('contact') // phone or email
    }
    validate(formData)

    // navigator.credentials.create
    } catch (error) {
      setErrorMessage(error)
    }
  }
  
  return (
    <form className={styles.registrationForm} onSubmit={onSubmit} aria-label="registration form">
      <label htmlFor="username">Username: <span aria-hidden="true">*</span></label>
      <input id="username" type="text" name="username" inputMode="username" autoComplete="username webauthn" required />
      <label htmlFor="contact">Email or phone: <span aria-hidden="true">*</span></label>
      <input id="contact" type="text" name="contact" inputMode="email" required /> {/* phone or email (needs validation) */}
      <button onClick={onClick} type="submit">Sign Up</button>
    </form>
  )
}

export default Register
