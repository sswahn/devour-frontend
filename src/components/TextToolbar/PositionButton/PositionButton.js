import ArrowsUpDownLeftRightIcon from '../../Icons/ArrowsUpDownLeftRightIcon/ArrowsUpDownLeftRightIcon'
import styles from './PositionButton.module.css'

function PositionButton({ openDropdown }) {

  const onClick = event => {
    navigator.vibrate?.(50)
    openDropdown(event.target.id)
  }

// change icon
  
  return (
    <button id="position" className={styles.positionButton} onClick={onClick} type="button" aria-label="open cartesian plane">
      <ArrowsUpDownLeftRightIcon />
    </button>
  )
}

export default PositionButton
