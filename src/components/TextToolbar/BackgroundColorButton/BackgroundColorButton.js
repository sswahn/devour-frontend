import PaletteIcon from '../../Icons/PaletteIcon/PaletteIcon'
import styles from './BackgroundColorButton.module.css'

function BackgroundColorButton({ colorPaletteRef, openDropdown }) {

  const onClick = event => {
    navigator.vibrate?.(50)
    openDropdown(event.target.id)
    colorPaletteRef.current.showPicker()
  }

  return (
    <button id="backgroundColor" className={styles.backgroundColorButton} onClick={onClick} type="button" aria-label="background color">
      <PaletteIcon />
      <div></div>
    </button>
  )
}

export default BackgroundColorButton
