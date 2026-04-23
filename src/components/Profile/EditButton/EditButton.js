import config from '../../../config'
import server from '../../../utilities/server'
import EditIcon from '../../Icons/EditIcon/EditIcon'
import styles from './EditButton.module.css'

function EditButton({ info }) {

  const action = () => {
    // submit updated info to server
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
    <button className={styles.editButton} onClick={onClick} onKeyDown={onKeyDown} type="button" aria-label={`edit ${info}`}>
      <EditIcon />
    </button>
  )
}

export default EditButton
