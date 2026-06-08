import styles from './SubmitButton.module.css'

function SubmitButton({ disabled }) {
  return (
    <button className={styles.submitButton} type="submit" disbled={disabled}>Sign Up</button>
  )
}

export default SubmitButton
