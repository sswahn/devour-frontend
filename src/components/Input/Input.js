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

  const onChange = event => {
    if (errors[id]) {
      setErrors({ [id]: '' })
    }
  }

  const onInvalid = event => {
    event.preventDefault()
    setErrors(prev => ({ ...prev, [event.target.name]: event.target.validationMessage }))
  }
  
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
        onInvalid={onInvalid}
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
