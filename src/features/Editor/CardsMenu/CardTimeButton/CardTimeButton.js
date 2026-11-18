import ClockIcon from '../../../../components/Icons/ClockIcon/ClockIcon'
import styles from './CardTimeButton.module.css'

function CardTimeButton({ setCardTime }) {

  const onClick = event => {
    navigator.vibrate?.(50)
    setCardTime(prev => !prev)
  }
  
  return (
    <button className={styles.cardTimeButton} onClick={onClick} type="button" arial-label="edit card time">
      <ClockIcon />
    </button>
  )
}

export default CardTimeButton
