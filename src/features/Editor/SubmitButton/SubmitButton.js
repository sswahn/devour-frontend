import PaperPlaneIcon from '../../../components/Icons/PaperPlaneIcon/PaperPlaneIcon'
import styles from './SubmitButton.module.css'

function SubmitButton({ openPublisher }) {

  const onClick = event => {
    navigator.vibrate?.(50)
    openPublisher()
  }

  return (
    <button className={styles.submitButton} onClick={onClick} type="button" aria-label="submit video">
      <PaperPlaneIcon />
    </button>
  )
}

export default SubmitButton
