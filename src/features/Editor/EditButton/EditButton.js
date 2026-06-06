import PenToSquareIcon from '../../../components/Icons/BarsIcon/BarsIcon'
import styles from './EditButton.module.css'

function EditButton() {

  const onClick = event => {
    // open editor options
  }

  return (
    <button className={styles.editButton} onClick={onClick} type="button" aria-label="open editor options">
      <BarsIcon />
    </button>
  )
}

export default EditButton
