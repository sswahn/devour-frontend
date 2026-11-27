import styles from './FontSizeSlider.module.css'

function FontSizeSlider({ fontSize, setFontSize }) {

  const onChange = event => {
    setFontSize(prev => ({ ...prev, fontSize: `${event.target.value}px` }))
  }

  // consider adding line height slider as well.
  
  return (
    <div className={styles.fontSizeSlider}>
      <label htmlFor="font-size-slider">
        {`Font Size: ${fontSize}px`}
      </label>
      <input 
        id="font-size-slider"
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
