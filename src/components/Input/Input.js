import { useState, useRef, useEffect } from 'react'
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
  const inputRef = useRef(null)
  
  const onChange = event => {
    if (errorMessage) {
      setErrorMessage('')
    }
  }

  const onInvalid = event => {
    event.preventDefault()
    setErrorMessage(event.target.validationMessage)
  }

  const handleError = () => {
    const input = inputRef.current
    
    const form = input?.closest('form') //.elements[0]
    
    console.log('should be the form: ', form)
    console.log('form elements: ', form.elements)
    console.log('first element in form [0]: ', form.elemnts[0])
    
    if (input?.closest('form').elements[0] === input) {
      input.focus()
    }
    setErrorMessage(error)
  }

  useEffect(() => {
    if (error) {
      handleError()
    }
  }, [error])
  
  return (
    <div className={styles.input}>
      <label htmlFor={id}>{label}:{/* needs opt-in: required && <span>*</span> */}</label>
      <input 
        ref={inputRef}
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
