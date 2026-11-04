import TextHeightIcon from '../../Icons/TextHeightIcon/TextHeightIcon'
import styles from './FontSizeButton.module.css'

function FontSizeButton({ openDropdown }) {

  const onClick = event => {
    navigator.vibrate?.(50)
    openDropdown(event.target.id)
  }

  return (
    <button id="fontSize" className={styles.fontSizeButton} type="button" aria-label="edit font size">
      <TextHeightIcon />
    </button>
  )
}

export default FontSizeButton
