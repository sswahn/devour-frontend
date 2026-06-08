import XmarkIcon from '../Icons/XmarkIcon/XmarkIcon'
import styles from './CloseButton.module.css'

function CloseButton({ overlay, close }) {

  const onClick = event => {
    navigator.vibrate?.(50)
    close()
  }
  
  return (
    <button className={styles.closeButton} onClick={onClick} type="button" aria-label={`close ${overlay}`}>
      <XmarkIcon />
    </button>
  )
}

export default CloseButton
