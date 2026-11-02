import FontIcon from '../../Icons/FontIcon/FontIcon'
import styles from './FontColorButton.module.css'

function FontColorButton({ openFontColorPalette }) {

  const onClick = event => {
    // this button will open the palette not select a color
    openFontColorPalette()
  }

  return (
    <button className={styles.fontColorButton} onClick={onClick} type="button" aria-label="font color">
      <FontIcon />
      <div></div>
    </button>
  )
}
