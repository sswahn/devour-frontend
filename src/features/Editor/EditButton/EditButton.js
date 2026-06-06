import PenToSquareIcon from '../../../components/Icons/PenToSquareIcon/PenToSquareIcon'
import styles from './EditButton.module.css'

function EditButton() {

  return (
    <button className={styles.editButton} type="button" aria-label="open editor options">
      <PenToSquareIcon />
    </button>
  )
}

export default EditButton
