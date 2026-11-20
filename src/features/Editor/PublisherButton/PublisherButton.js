import PaperPlaneIcon from '../../../components/Icons/PaperPlaneIcon/PaperPlaneIcon'
import styles from './PublisherButton.module.css'

function PublisherButton({ openPublisher }) {

  const onClick = event => {
    navigator.vibrate?.(50)
    openPublisher()
  }

  return (
    <button className={styles.publisherButton} onClick={onClick} type="button" aria-label="continue to publish video">
      <PaperPlaneIcon />
    </button>
  )
}

export default PublisherButton
