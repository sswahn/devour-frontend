import { useId } from 'react'
import './Input.module.css'

const Input = ({ label, error, success, helperText, required, ...props }) => {
  const id = useId()

  // Logical state for the container
  const state = error ? 'error' : success ? 'success' : 'default';

  return (
    <div className="input-group" data-state={state}>
      <label htmlFor={id} className="input-label">
        <span>{label}</span>
        {required && <span className="required-indicator" aria-hidden="true">*</span>}
      </label>

      <input 
        id={id} 
        className={styles.input} 
        aria-invalid={!!error} 
        aria-describedby={`${id}-helper ${error ? `${id}-error` : ''}`} 
       {required && 'required'} 
       {...props} />
  

      <div className="input-messages">
        {error && (
          <p id={`${id}-error`} className="message error" role="alert">
            {error}
          </p>
        )}
        {success && (
          <p className="message success">
            {success}
          </p>
        )}
        {helperText && !error && (
          <p id={`${id}-helper`} className="message helper">
            {helperText}
          </p>
        )}
      </div>
    </div>
  )
}

export default ModernInput
