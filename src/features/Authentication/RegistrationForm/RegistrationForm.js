import styles from './RegistrationForm.module.css'

function RegistrationForm() {

  const onSubmit = event => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const request = {
      username: formData.get('username')
    }
  }
  
  return (
    <form className={styles.registrationForm} onSubmit={onSubmit} aria-label="registration form">
      <input type="text" inputMode="username" />
      <input type="text" /> {/* phone or email (needs validation) */}
      <button type="submit">{/* <PaperPlane /> */} Submit</button>
    </form>
  )
}

export default RegistrationForm
