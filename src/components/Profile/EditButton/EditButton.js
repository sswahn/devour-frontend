import config from '../../../config'
import server from '../../../utilities/server'
import EditIcon from '../../Icons/EditIcon/EditIcon'
import styles from './EditButton.module.css'

function EditButton({ field }) {

  const action = () => {
    // so the Edit button should just open the EditInput field
    // (or however image gets edited)
    // the Input will make the request
    // setEditInputIsOpen(true)
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
      <EditIcon />
    </button>
  )
}

export default EditButton
