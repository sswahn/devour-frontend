import EditIcon from '../../../components/Icons/EditIcon/EditIcon'
import styles from './EditButton.module.css'

function EditButton({ field, editorIsOpen, setEditorIsOpen }) {
 // const [editorIsOpen, setEditorIsOpen] = useState()
  
  const action = () => {
    // display input
    // toggle state between
    // edit/submit
    setEditorIsOpen(prev => !prev)
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
