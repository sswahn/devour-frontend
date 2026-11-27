import ArrowsUpDownLeftRightIcon from '../../Icons/ArrowsUpDownLeftRightIcon/ArrowsUpDownLeftRightIcon'
import styles from './PositionButton.module.css'

function PositionButton({ openDropdown }) {

  const onClick = event => {
    navigator.vibrate?.(50)
    openDropdown()
  }

// change icon
  
  return (
    <button className={styles.positionButton} onClick={onClick} type="button" aria-label="open cartesian plane">
      <ArrowsUpDownLeftRightIcon />
    </button>
  )
}

export default PositionButton
