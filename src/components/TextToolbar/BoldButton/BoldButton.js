import BoldIcon from '../../Icons/BoldIcon/BoldIcon'
import styles from './BoldButton.module.css'

function BoldButton({ setStyle }) {

  const onClick = event => {
    navigator.vibrate?.(50)
    setStyle('bold')
  }
  
  return (
    <button className={styles.boldButton} onClick={onClick} type="button" aria-label="bold">
      <BoldIcon />
    </button>
  )
}

export default BoldButton
