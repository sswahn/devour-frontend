import XmarkIcon from '../../Icons/XmarkIcon/XmarkIcon'
import styles from './CloseButton.module.css'

function CloseButton({ close }) {

  const onClick = event => {
    navigator.vibrate?.()
    close()
  }
  
  return (
    <button className={styles.closeButton} onClick={onClick} type="button" aria-label="close sidebar">
      <XmarkIcon />
    </button>
  )
}

export default CloseButton
