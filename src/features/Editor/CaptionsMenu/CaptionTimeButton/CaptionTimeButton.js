import ClockIcon from '../../../../components/Icons/ClockIcon/ClockIcon'
import styles from './CaptionTimeButton.module.css'

function CaptionTimeButton() {

  const onClick = event => {
    // toggle display of start, end inputs
  }
  
  return (
    <button className={styles.captionTimeButton} onClick={onClick} type="button" arial-label="edit caption time">
      <ClockIcon />
    </button>
  )
}

export default CaptionTimeButton
