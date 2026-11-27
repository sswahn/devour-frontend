import BoldIcon from '../../Icons/BoldIcon/BoldIcon'
import styles from './BoldButton.module.css'

function PositionButton({ fontWeight, setFontWeight }) {

  const onClick = event => {
    navigator.vibrate?.(50)
    setFontWeight(prev => ({ ...prev, fontWeight: prev.fontWeight === 'bold' ? 'normal' : 'bold' }))
  }
  
  return (
    <button className={`${styles.positionButton} ${fontWeight === 'bold' ? styles.isActive : ''} `} onClick={onClick} type="button" aria-label="bold">
      <BoldIcon />
    </button>
  )
}

export default PositionButton
