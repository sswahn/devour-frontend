import PaletteIcon from '../../Icons/PaletteIcon/PaletteIcon'
import styles from './BackgroundColorButton.module.css'

function BackgroundColorButton({ setBackgroundColor }) {

  const onClick = event => {
    navigator.vibrate?.(50)
    setBackgroundColor('backgroundColor')
  }

  return (
    <button className={styles.backgroundColorButton} onClick={onClick} type="button" aria-label="background color">
      <PaletteIcon />
    </button>
  )
}

export default BackgroundColorButton
