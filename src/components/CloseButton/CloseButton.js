import useFocusStack from '../../../hooks/useFocusStack'
import ArrowLeftIcon from '../Icons/ArrowLeftIcon/ArrowLeftIcon'
import styles from './CloseButton.module.css'

function CloseButton({ overlay, close }) {
  const { pop } = useFocusStack()
  
  const action = () => {
    navigator.vibrate(50)
    close()
    pop()
  }
  
  const onClick = event => {
    action()
  }

  const onKeyDown = event => {
    if (event.key === 'Enter') {
      event.preventDefault()
      action()
    }
  }
 
 return (
   <button 
     className={styles.closeButton} 
     onClick={onClick} 
     onKeyDown={onKeyDown}
     type="button" 
     aria-label={`close ${overlay}`}>
     <ArrowLeftIcon />
   </button>
  )
}

export default CloseButton
