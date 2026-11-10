import ClosedCaptioningIcon from '../../components/Icons/ClosedCaptioningIcon/ClosedCaptioningIcon'
import styles from './CaptionsButton.module.css'

function CaptionsButton({ openCaptions }) {

  const onClick = event => {
    navigator.vibrate?.(50)
    openCaptions()
  }
  
  return (
    <button className={styles.captionsButton} onClick={onClick} type="button" aria-label="add a caption">
      <ClosedCaptioningIcon />
    </button>
  )
}

export default CaptionsButton
