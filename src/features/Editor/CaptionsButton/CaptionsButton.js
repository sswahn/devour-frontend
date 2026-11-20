import ClosedCaptioningIcon from '../../../components/Icons/ClosedCaptioningIcon/ClosedCaptioningIcon'
import styles from './CaptionsButton.module.css'

function CaptionsButton({ openCaptionsMenu }) {

  const onClick = event => {
    event.stopPropagation()
    
    navigator.vibrate?.(50)
    openCaptionsMenu()
  }
  
  return (
    <button className={styles.captionsButton} onClick={onClick} type="button" aria-label="open captions menu">
      <ClosedCaptioningIcon />
    </button>
  )
}

export default CaptionsButton
