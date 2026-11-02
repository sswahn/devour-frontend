import TextHeightIcon from '../../Icons/TextHeightIcon/TextHeightIcon'
import styles from './FontSizeButton.module.css'

function FontSizeButton({ openFontSizeSlider }) {

  const onClick = event => {
    
    openFontSizeSlider()
  }

  return (
    <button className={styles.fontSizeButton} type="button" aria-label="edit font size">
      <TextHeightIcon />
    </button>
  )
}

export default FontSizeButton
