import EditIcon from '../../../components/Icons/EditIcon/EditIcon'
import styles from './EditImageButton.module.css'

function EditImageButton({ open }) {

  const onClick = event => {
    navigation.vibrate?.()
    open()
  }

  return (
    <button className={styles.editImageButton} onClick={onClick} type="button" aria-label="edit profile image">
      <EditIcon size={16} />
    </button>
  )
}

export default EditImageButton
