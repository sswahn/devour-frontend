import PaletteIcon from '../../Icons/PaletteIcon/PaletteIcon'
import styles from './BackgroundColorButton.module.css'

function BackgroundColorButton({ openDropdown }) {

  const onClick = event => {
    navigator.vibrate?.(50)
    openDropdown(event.target.id)
  }

  return (
    <button id="backgroundColor" className={styles.backgroundColorButton} onClick={onClick} type="button" aria-label="background color">
      <PaletteIcon />
    </button>
  )
}

export default BackgroundColorButton
