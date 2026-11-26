import BoldIcon from '../../Icons/BoldIcon/BoldIcon'
import styles from './BoldButton.module.css'

function BoldButton({ setStyle }) { // need to pass the state in for styling bg

  const onClick = event => {
    navigator.vibrate?.(50)
    setStyle(prev => ({ ...prev, fontWeight: prev.fontWeight === 'bold' ? 'normal' : 'bold' }))
  }

  // ${bold ? styles.active : ''}
  
  return (
    <button className={`${styles.boldButton}  `} onClick={onClick} type="button" aria-label="bold">
      <BoldIcon />
    </button>
  )
}

export default BoldButton
