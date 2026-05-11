import XmarkIcon from '../../../components/Icons/XmarkIcon/XmarkIcon'
import EditIcon from '../../../components/Icons/EditIcon/EditIcon'
import styles from './EditImageButton.module.css'

function EditImageButton({ field, isOpen, open, close }) {

  const onClick = event => {
    navigation.vibrate?.()
    isOpen ? close() : open()
  }

  return (
    <button 
      className={styles.editImageButton} 
      onClick={onClick} 
      type="button" 
      aria-pressed={isOpen}
      aria-label={!isOpen ? `edit profile ${field}` : `close to update ${field}`}>
      {!isOpen ? <EditIcon size={16} /> : <XmarkIcon size={16} />}
    </button>
  )
}

export default EditImageButton
