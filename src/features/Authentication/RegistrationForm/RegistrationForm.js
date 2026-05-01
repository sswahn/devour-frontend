import styles from './RegistrationForm.module.css'

function RegistrationForm() {

  const onClick = event => {
    navigator.vibrate?.(50)
  }

  const onSubmit = event => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const request = {
      username: formData.get('username'),
      contact: formData.get('contact') // phone or email
    }
    
  }
  
  return (
    <form className={styles.registrationForm} onSubmit={onSubmit} aria-label="registration form">
      <input type="text" name="username" inputMode="username" />
      <input type="text" name="contact" /> {/* phone or email (needs validation) */}
      <button onClick={onClick} type="submit">Sign Up</button>
    </form>
  )
}

export default RegistrationForm
