import FontIcon from '../../Icons/FontIcon/FontIcon'
import styles from './FontColorButton.module.css'

function FontColorButton({ openFontColorPalette }) {

  const onClick = event => {
    navigator.vibrate?.(50)
    openFontColorPalette()
  }

  return (
    <button className={styles.fontColorButton} onClick={onClick} type="button" aria-label="font color">
      <FontIcon />
      <div></div>
    </button>
  )
}
