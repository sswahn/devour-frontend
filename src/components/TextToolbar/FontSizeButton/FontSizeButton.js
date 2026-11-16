import TextHeightIcon from '../../Icons/TextHeightIcon/TextHeightIcon'
import styles from './FontSizeButton.module.css'

function FontSizeButton({ openDropdown }) {

  const onClick = event => {
    navigator.vibrate?.(50)
    openDropdown(event.target.id)
  }

  return (
    <button id="fontSize" className={styles.fontSizeButton} onClick={onClick} type="button" aria-label="font size">
      <TextHeightIcon />
    </button>
  )
}

export default FontSizeButton
