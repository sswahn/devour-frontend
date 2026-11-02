import styles from './ColorPalette.module.css'

function ColorPalette({ setColor }) {

  const onClick = event => {
    setColor(event.target.value)
  }
  
  return (
    <div className={styles.colorPalette}>
      <label htmlFor="color-palette">Font color:</label>
      <input id="color-palette" type="color" onClick={onClick}  value="#FFFFFF" />
    </div>
  )
}

export default ColorPalette
