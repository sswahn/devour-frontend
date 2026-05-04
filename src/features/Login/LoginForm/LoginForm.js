import { useState } from 'react'
import useSession from '../../../hooks/useSession'
import styles from './LoginForm.module.css'

function LoginForm() {
  const { setSession } = useSession() 
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [errors, setErrors] = useState({
    username: ''
  })

  // Perform validation checks in javascript and return alert if violated.
  // ex. username.length > 50 characters, etc. -> error out.

  const validateUsername = username => {
    if (!username.trim()) {
      throw new Error('Username is required.', { cause: validationError })
    }
    return username
  }
  
  const onSubmit = event => {
    try {
      event.preventDefault()
      navigator.vibrate?.(50)
      setLoading(true)
      const formData = new FormData(event.target)
      const request = {
        username: validateUsername(formData.get('username'))
      }
        
      // initiate auth call to backend
      // response returns challenge
      // challenge is signed by browser/device:
      // (call navigator.credentials.get() for signature)
      // send signature to backend for verification and tokens
      
      // setSession({ isAuthenticated: true, ...response.message.userData})
    } catch (error) {
       if (error.cause === validationError) {
         setErrors(prev => ({ username: error.message }))
       }
    } finally {
      setLoading(false)
    }
  }
  
  
  return (
    <form className={styles.loginForm} onSubmit={onSubmit} aria-label="login form">
      <label htmlFor="username">Email or username:</label>
      <input 
        id="username" 
        name="username" 
        type="text" 
        inputMode="email" 
        autoComplete="username webauthn" 
        aria-invalid={errors.username ? true : undefined} 
        aria-errormessage={errors.username ? 'error-username' : undefined} />
      {errors.username && <p id="error-username" role="alert">{errors.username}</p>}
      <button onClick={onClick} type="submit">Sign In</button>
    </form>
  )
}

export default LoginForm
