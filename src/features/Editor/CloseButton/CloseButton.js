import XmarkIcon from '../../../components/Icons/XmarkIcon/XmarkIcon'
import styles from './CloseButton.module.css'

// make to a global CloseButton

function CloseButton({ close }) {

  const onClick = event => {
    navigator.vibrate?.(50)
    close()
  }
  
  return (
    <button className={styles.closeButton} onClick={onClick} type="button" aria-label="close sidebar">
      <XmarkIcon />
    </button>
  )
}

export default CloseButton
