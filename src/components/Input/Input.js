import { useState, useRef, useEffect } from 'react'
import styles from './Input.module.css'

const Input = ({ id, type, label, inputMode, autoComplete, error, required, ...props }) => {
  const [errorMessage, setErrorMessage] = useState('')
  const inputRef = useRef(null)

  const focusInvalidInput = () => {
    const form = inputRef.current?.closest('form')
    const invalidInput = [...form.elements].find(
      input => input.hasAttribute('aria-invalid')
    )
    invalidInput.focus()
  }

  const handleError = err => {
    if (err) {
      setErrorMessage(err)
    }
  }

  const onChange = event => {
    if (errorMessage) {
      setErrorMessage('') // reset
    }
  }
  
  const onInvalid = event => {
    event.preventDefault()
    handleError(event.target.validationMessage)
  }

  useEffect(() => {
    if (errorMessage) {
      focusInvalidInput()
    }
  }, [errorMessage])

  useEffect(() => {
    if (error) {
      handleError(error)
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
