import ItalicIcon from '../../Icons/ItalicIcon/ItalicIcon'
import styles from './ItalicButton.module.css'

function ItalicButton({ setStyle }) {

  const onClick = event => {
    navigator.vibrate?.(50)
    setStyle('italic')
  }
  
  return (
    <button className={styles.italicButton} onClick={onClick} type="button" aria-label="italic">
      <ItalicIcon />
    </button>
  )
}

export default ItalicButton
