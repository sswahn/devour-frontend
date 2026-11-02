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
      <input id="font-size-slider" onChange={onChange} type="range" name="fontSize" min="12" max="48" value={fontSize} />
    </div>
  )
}

export default FontSizeSlider
