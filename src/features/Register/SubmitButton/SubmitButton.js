import styles from './SubmitButton.module.css'

function SubmitButton({ loading, message }) {
  return (
    <button className={styles.submitButton} type="submit" disbled={!!message || loading}>Sign Up</button>
  )
}

export default SubmitButton
