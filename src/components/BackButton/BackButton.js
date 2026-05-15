import ArrowLeftIcon from '../Icons/ArrowLeftIcon/ArrowLeftIcon'
import styles from './BackButton.module.css'

function BackButton({ overlay, close }) {

  const onClick = event => {
    navigator.vibrate?.(50)
    close()
  }
 
 return (
   <button className={styles.backButton} onClick={onClick} type="button" aria-label={`close ${overlay}`}>
     <ArrowLeftIcon />
   </button>
  )
}

export default BackButton
