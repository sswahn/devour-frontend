import { useState, useEffect } from 'react'
import useSession from '../../../hooks/useSession'
import Input from '../../../components/Input/Input'
import styles from './LoginForm.module.css'

function LoginForm() {
  const { setSession } = useSession() 
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [errors, setErrors] = useState({ username: '' })

  const onChange = event => {
    if (errors.username) {
      setErrors({ username: '' })
    }
  }
  
  const validateUsername = username => {
    if (!username.trim()) {
      throw new Error('Username is required.', { cause: 'validationError' })
    }
    return username
  }

  const handleErrors = error => {
    if (error.cause === 'validationError') {
      setErrors(prev => ({ ...prev, username: error.message }))
    }
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
      handleErrors(error)
    } finally {
      setLoading(false)
    }
  }

  const onInvalid = event => {
    event.preventDefault()
    setErrors(prev => ({ ...prev, [event.target.name]: event.target.validationMessage }))
  }

  useEffect(() => {
    document.addEventListener('invalid', onInvalid, true)
    return () => {
      document.removeEventListener('invalid', onInvalid, true)
    }
  }, [])

  useEffect(() => {
    if (errors.username) {
      // need to place focus on first invalid input
    }
  }, [errors.username])
  
  return (
    <form className={styles.loginForm} onSubmit={onSubmit} aria-label="login form">
      <Input 
        id="username"
        type="text"
        label="Email or username"
        inputMode="email"
        autoComplete="username webauthn"
        required />
          
      <label htmlFor="username">Email or username:</label>
      <input 
        id="username" 
        className={errors.username ? styles.invalid : ''}
        name="username" 
        type="text"
        onChange={onChange}
        inputMode="email" 
        autoComplete="username webauthn" 
        aria-invalid={errors.username ? true : undefined} 
        aria-errormessage={errors.username ? 'error-username' : undefined} />
      {errors.username && <p id="error-username" role="alert">{errors.username}</p>}
      <button type="submit">Sign In</button>
    </form>
  )
}

export default LoginForm
