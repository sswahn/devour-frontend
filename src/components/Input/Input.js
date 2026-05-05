import styles from './Input.module.css'

const Input = ({ 
  id, 
  type, 
  label, 
  inputMode, 
  onChange, 
  autoComplete, 
  errors, 
  required = false, 
  ...props 
}) => {

  return (
    <div className={styles.input}>
      <label htmlFor={id}>
        <span>{label}</span>
        {required && <span>*</span>}
      </label>
      <input 
        id={id} 
        className={errors[id] ? styles.invalid : ''}
        name={id}
        type={type}
        onChange={onChange}
        inputMode={inputMode} 
        autoComplete={autoComplete}
        aria-invalid={errors[id] ? true : undefined} 
        aria-errormessage={errors[id] ? `error-${id}` : undefined}
        required={required}
        {...props} />
      {errors[id] && <p id={`error-${id}`} role="alert">{errors[id]}</p>}
    </div>
  )
}

export default Input
