import ItalicIcon from '../../Icons/ItalicIcon/ItalicIcon'
import styles from './ItalicButton.module.css'

function ItalicButton({ fontStyle, setFontStyle }) {

  const onClick = event => {
    navigator.vibrate?.(50)
    setFontStyle(prev => ({ ...prev, fontStyle: prev.fontStyle === 'italic' ? 'normal' : 'italic' }))
  }
  
  return (
    <button className={`${styles.italicButton} ${fontStyle === 'italic' ? styles.isActive : ''}`} onClick={onClick} type="button" aria-label="italic">
      <ItalicIcon />
    </button>
  )
}

export default ItalicButton
