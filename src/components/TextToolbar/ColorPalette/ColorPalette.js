import styles from './ColorPalette.module.css'

function ColorPalette({ colorPaletteRef, color, setColor }) {

  const onChange = event => {
    setColor(event.target.value)
  }
  
  return (
    <div className={styles.colorPalette}>
      <label htmlFor="color-palette">Color:</label>
      <input ref={colorPaletteRef} id="color-palette" type="color" onChange={onChange} value={color === 'transparent' ? '#ffffff' : color} />
    </div>
  )
}

export default ColorPalette
