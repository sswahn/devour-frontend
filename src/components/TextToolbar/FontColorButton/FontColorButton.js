import FontIcon from '../../Icons/FontIcon/FontIcon'
import styles from './FontColorButton.module.css'

function FontColorButton({ openDropdown }) {

  const onClick = event => {
    navigator.vibrate?.(50)
    openDropdown(event.target.id)
  }

  return (
    <button id="color" className={styles.fontColorButton} onClick={onClick} type="button" aria-label="font color">
      <FontIcon />
      <div></div>
    </button>
  )
}
