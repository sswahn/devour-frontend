import BoldIcon from '../../../../components/Icons/BoldIcon/BoldIcon'
import styles from './BoldButton.module.css'

function BoldButton({ setBold }) {

  const onClick = event => {
    navigator.vibrate?.(50)
    setBold(prev => !prev)
  }
  
  return (
    <button className={styles.boldButton} onClick={onClick} type={button} aria-label="bold">
      <BoldIcon />
    </button>
  )
}

export default BoldButton
