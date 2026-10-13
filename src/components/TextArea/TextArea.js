import { useState, useRef, useEffect } from 'react'
import styles from './TextArea.module.css'

function TextArea({ id, type, label, value, inputMode, autoComplete, error, required, ...props }) {
  const [errorMessage, setErrorMessage] = useState('')
  const textAreaRef = useRef(null)

  const focusInvalidInput = () => {
    const form = textAreaRef.current?.closest('form')
    const invalidInput = [...form.elements].find(
      textarea => textarea.hasAttribute('aria-invalid')
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
    <div className={styles.textArea}>
      <label htmlFor={id}>{label}:{/* needs opt-in: required && <span>*</span> */}</label>
      <textarea 
        ref={textAreaRef}
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
        {...props}>{value}<textarea/>
      {errorMessage && <p id={`error-${id}`} role="alert">{errorMessage}</p>}
    </div>
  )
}

export default TextArea
