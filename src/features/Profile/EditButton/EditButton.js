import EditIcon from '../../../components/Icons/EditIcon/EditIcon'
import styles from './EditButton.module.css'

function EditButton({ open }) {

  const onClick = event => {
    navigation.vibrate?.()
    open()
  }

  return (
    <button className={styles.editButton} onClick={onClick} type="button" aria-label="edit profile">
      <EditIcon size={16} />
    </button>
  )
}

export default EditButton
