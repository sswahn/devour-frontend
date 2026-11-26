import BoldIcon from '../../Icons/BoldIcon/BoldIcon'
import styles from './BoldButton.module.css'

function BoldButton({ bold, setBold }) {

  const onClick = event => {
    navigator.vibrate?.(50)
    setBold(prev => ({ ...prev, fontWeight: prev.fontWeight === 'bold' ? 'normal' : 'bold' }))
  }
  
  return (
    <button className={`${styles.boldButton} ${bold ? styles.active : ''} `} onClick={onClick} type="button" aria-label="bold">
      <BoldIcon />
    </button>
  )
}

export default BoldButton
