import styles from './FontSizeSlider.module.css'

function FontSizeSlider({ fontSize, setFontSize }) {

  const onChange = event => {
    const value = Number(event.target.value)
    setFontSize(value)
  }

  return (
    <div className={styles.fontSizeSlider}>
      <label htmlFor="font-size-slider">
        Font Size: {fontSize}px
      </label>
      <input 
        value={fontSize}
        onChange={onChange} 
        type="range" 
        name="fontSize" 
        min="12" 
        max="48" 
        aria-valuetext={`${fontSize} pixels`} />
    </div>
  )
}

export default FontSizeSlider
