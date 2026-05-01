import styles from './RegistrationForm.module.css'

function RegistrationForm() {

  const onClick = event => {
    navigator.vibrate?.(50)
  }

  const onSubmit = event => {
    event.preventDefault()
    const formData = new FormData(event.target)
    // validate data first.
    const request = {
      username: formData.get('username'),
      contact: formData.get('contact') // phone or email
    }
    
  }
  
  return (
    <form className={styles.registrationForm} onSubmit={onSubmit} aria-label="registration form">
      <label htmlFor="username">Username:</label>
      <input id="username" type="text" name="username" inputMode="username" />
      <label htmlFor="contact">Email or phone:</label>
      <input id="contact" type="text" name="contact" inputMode="email" /> {/* phone or email (needs validation) */}
      <button onClick={onClick} type="submit">Sign Up</button>
    </form>
  )
}

export default RegistrationForm
