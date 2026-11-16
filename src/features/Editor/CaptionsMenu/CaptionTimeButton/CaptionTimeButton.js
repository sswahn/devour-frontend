import ClockIcon from '../../../../components/Icons/ClockIcon/ClockIcon'
import styles from './CaptionTimeButton.module.css'

function CaptionTimeButton({ setCaptionTime }) {

  const onClick = event => {
    navigator.vibrate?.(50)
    setCaptionTime(prev => !prev)
  }
  
  return (
    <button className={styles.captionTimeButton} onClick={onClick} type="button" arial-label="edit caption time">
      <ClockIcon />
    </button>
  )
}

export default CaptionTimeButton
