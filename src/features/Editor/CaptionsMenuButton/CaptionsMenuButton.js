import ClosedCaptioningIcon from '../../../components/Icons/ClosedCaptioningIcon/ClosedCaptioningIcon'
import styles from './CaptionsMenuButton.module.css'

function CaptionsMenuButton({ openCaptionsMenu }) {

  const onClick = event => {
    navigator.vibrate?.(50)
    openCaptionsMenu()
  }
  
  return (
    <button className={styles.captionsMenuButton} onClick={onClick} type="button" aria-label="open captions menu">
      <ClosedCaptioningIcon />
    </button>
  )
}

export default CaptionsMenuButton
