import TextHeightIcon from '../../../../components/Icons/TextHeightIcon/TextHeightIcon'
import styles from './FontSizeButton.module.css'

function FontSizeButton({ setFontSize }) { // this should be openFontSizeSlider

  const onClick = event => {
    // openFontSizeSlider(prev => !prev)
  }

  // maybe make this open a slider with an onChange event that updates fontSize 
  
  return (
    <button className={styles.fontSizeButton} type="button" aria-label="edit font size">
      <TextHeightIcon />
    </button>
  )
}

export default FontSizeButton
