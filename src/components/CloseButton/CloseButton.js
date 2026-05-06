import ArrowLeftIcon from '../Icons/ArrowLeftIcon/ArrowLeftIcon'
import styles from './CloseButton.module.css'

function CloseButton({ overlay, close }) {

  const onClick = event => {
    navigator.vibrate?.(50)
    close()
  }
 
 return (
   <button 
     className={styles.closeButton} 
     onClick={onClick} 
     type="button" 
     aria-label={`close ${overlay}`}>
     <ArrowLeftIcon />
   </button>
  )
}

export default CloseButton
