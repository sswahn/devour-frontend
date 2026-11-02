import styles from './FontColorPalette.module.css'

function FontColorPalette() {
  return (
    <div className={styles.colorPalette}>
      <label htmlFor="color-palette">Font color:</label>
      <input id="color-palette" name="foreground" type="color" value="#FFFFFF" />
    </div>
  )
}

export default FontColorPalette
