import PenToSquareIcon from '../../../components/Icons/PenToSquareIcon/PenToSquareIcon'
import styles from './EditButton.module.css'

function EditButton() {

  const onClick = event => {
    // open editor options
  }

  return (
    <button className={styles.editButton} onClick={onClick} type="button" aria-label="open editor options">
      <PenToSquareIcon /> {/* change icon to bars or something related to opening a menu */}
    </button>
  )
}

export default EditButton
