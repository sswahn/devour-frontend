import XmarkIcon from '../../../components/Icons/XmarkIcon/XmarkIcon'
import EditIcon from '../../../components/Icons/EditIcon/EditIcon'
import styles from './EditTextButton.module.css'

function EditTextButton({ field, isOpen, open, close }) {

  const onClick = event => {
    navigation.vibrate?.()
    isOpen ? close() : open()
  }

  return (
    <button className={styles.editTextButton} onClick={onClick} type="button" aria-label={`edit profile ${field}`}>
      {isOpen ? <XmarkIcon /> : <EditIcon size={16} />}
    </button>
  )
}

export default EditTextButton
