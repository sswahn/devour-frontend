import styles from './ColorPalette.module.css'

function ColorPalette({ color, setColor }) {

  const onChange = event => {
    setColor(event.target.value)
  }
  
  return (
    <div className={styles.colorPalette}>
      <label htmlFor="color-palette">Font color:</label>
      <input id="color-palette" type="color" onChange={onChange} value={color} />
    </div>
  )
}

export default ColorPalette
