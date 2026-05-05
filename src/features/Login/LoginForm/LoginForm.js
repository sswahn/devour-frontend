import { useState, useEffect } from 'react'
import { api } from '../../../config'
import useSession from '../../../hooks/useSession'
import Input from '../../../components/Input/Input'
import styles from './LoginForm.module.css'

function LoginForm() {
  const { setSession } = useSession() 
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({ username: '' })
  
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
  
  const onSubmit = async event => {
    try {
      event.preventDefault()
      navigator.vibrate?.(50)
      setLoading(true)
      const formData = new FormData(event.target)
      const username = validateUsername(formData.get('username'))
      
      // initiate auth call to backend
      // response returns challenge
     //  const challenge = await server.get(api.passkey)
      
      // challenge is signed by browser/device:
      // (call navigator.credentials.get() for signature)
      // send signature to backend for verification and tokens
      
      const credentials = '' // await navigator.credentials.get({
     //   publicKey: publicKeyCredentialRequestOptions
    //  })
      
      const request = {
        username,
        credentials
      }
      // const response = await server.post(api.login, request)
      // setSession({ user: { isAuthenticated: true, data: response.data })
    } catch (error) {
      handleErrors(error)
    } finally {
      setLoading(false)
    }
  }
  
  return (
    <form className={styles.loginForm} onSubmit={onSubmit} aria-label="login form">
      <Input 
        id="username"
        type="text"
        label="Email or username"
        inputMode="email"
        autoComplete="username webauthn"
        error={errors.username}
        required />
      <button type="submit">Sign In</button>
    </form>
  )
}

export default LoginForm
