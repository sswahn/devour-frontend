import EllipsisVerticalIcon from '../../Icons/EllipsisVerticalIcon/EllipsisVerticalIcon'
import styles from './DropdownButton.module.css'

function DropdownButton({ id, label, isOpen, open, close, buttonRef }) {
  
  const onClick = event => {
    event.stopPropagation()
    navigator.vibrate?.(50)
    isOpen ? close() : open()
  }
  
  return (
    <button 
      id={`dropdown-button-${id}`}
      className={styles.dropdownButton}
      ref={buttonRef}
      onClick={onClick} 
      type="button" 
      aria-label={label} 
      aria-haspopup="menu" 
      aria-expanded={isOpen} 
      aria-controls={`dropdown-list-${id}`}>
      <EllipsisVerticalIcon />
    </button>
  )
}

export default DropdownButton
