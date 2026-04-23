import { useState } from 'react'
import useSession from '../../../hooks/useSession'
import styles from './LoginForm.module.css'

function LoginForm() {
  const { setSession } = useSession() 
  const [loading, setLoading] = useState(false)

  // Perform validation checks in javascript and return alert if violated.
  // ex. username.length > 50 characters, etc. -> error out.

  const onClick = event => {
    navigator.vibrate?.(50)
  }
  
  const onSubmit = event => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const request = {
      username: formData.get('username')
    }
    // initiate auth call to backend
    // response returns challenge
    // challenge is signed by browser/device:
    // (call navigator.credentials.get() for signature)
    // send signature to backend for verification and tokens
    
    // setSession({ isAuthenticated: true, ...response.message.userData})
  }
  
  
  return (
    <form className={styles.loginForm} onSubmit={onSubmit} aria-label="login form">
      <label htmlFor="username">Email or username:</label>
      <input id="username" name="username" type="text" required autoComplete="username webauthn" />
      <button onClick={onClick} type="submit">Sign In</button>
    </form>
  )
}

export default LoginForm
