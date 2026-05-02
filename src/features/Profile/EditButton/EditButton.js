import EditIcon from '../../../components/Icons/EditIcon/EditIcon'
import styles from './EditButton.module.css'

function EditButton({ field, open }) {

  const action = () => {
    open()
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
    <button className={styles.editButton} onClick={onClick} onKeyDown={onKeyDown} type="button" aria-label={`edit ${field}`}>
      <EditIcon size={16} />
    </button>
  )
}

export default EditButton
