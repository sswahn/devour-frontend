import { useState } from 'react'
import styles from './RegistrationForm.module.css'

function RegistrationForm() {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [error, setError] = useState(false)
  
  const onClick = event => {
    navigator.vibrate?.(50)
  }

  const onSubmit = event => {
    event.preventDefault()
    const formData = new FormData(event.target)
    // validate data first.
    const request = {
      username: formData.get('username'),
      contact: formData.get('contact') // phone or email
    }

    // navigator.credentials.create
    
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

export default RegistrationForm
