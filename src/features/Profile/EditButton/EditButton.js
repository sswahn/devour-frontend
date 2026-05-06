import XmarkIcon from '../../../components/Icons/XmarkIcon/XmarkIcon'
import EditIcon from '../../../components/Icons/EditIcon/EditIcon'
import styles from './EditButton.module.css'

function EditButton({ field, isOpen, open, close }) {

  const action = () => {
    isOpen ? close() : open()
  }

  const onClick = event => {
    navigation.vibrate?.()
    action()
  }
  
  const onKeyDown = event => {
    if (event.key === 'Enter') {
      event.preventDefault()
      action()
    }
  }

  return (
    <button className={styles.editButton} onClick={onClick} onKeyDown={onKeyDown} type="button" aria-label={`edit profile ${field}`}>
      {!isOpen ? <EditIcon size={16} /> : <XmarkIcon size={16} />}
    </button>
  )
}

export default EditButton
