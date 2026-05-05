import { useEffect } from 'react'
import styles from './Input.module.css'

const Input = ({ 
  id, 
  type, 
  label, 
  inputMode, 
  autoComplete, 
  error, 
  required = false, 
  ...props 
}) => {
  const [errorMessage, setErrorMessage] = useState('')
  
  const onChange = event => {
    if (errorMessage) {
      setErrorMessage('')
    }
  }

  const onInvalid = event => {
    event.preventDefault()
    setErrorMessage(event.target.validationMessage)
  }

  useEffect(() => {
    if (error) {
      setError(error)
    }
  }, [error])
  
  return (
    <div className={styles.input}>
      <label htmlFor={id}>
        <span>{label}:</span>
        {required && <span>*</span>}
      </label>
      <input 
        id={id} 
        className={errorMessage ? styles.invalid : ''}
        name={id}
        type={type}
        onChange={onChange}
        onInvalid={onInvalid}
        inputMode={inputMode} 
        autoComplete={autoComplete}
        aria-invalid={errorMessage ? true : undefined} 
        aria-errormessage={errorMessage ? `error-${id}` : undefined}
        required={required}
        {...props} />
      {errorMessage && <p id={`error-${id}`} role="alert">{errorMessage}</p>}
    </div>
  )
}

export default Input
