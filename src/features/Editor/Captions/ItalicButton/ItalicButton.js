import ItalicIcon from '../../../../components/Icons/ItalicIcon/ItalicIcon'
import styles from './ItalicButton.module.css'

function ItalicButton({ setItalic }) {

  const onClick = event => {
    navigator.vibrate?.(50)
    setItalic(prev => !prev)
  }
  
  return (
    <button className={styles.italicButton} onClick={onClick} type={button} aria-label="italic">
      <ItalicIcon />
    </button>
  )
}

export default ItalicButton
