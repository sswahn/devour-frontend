import EditButton from '../EditButton/EditButton'
import styles from './ImageField.module.css'

function ImageField({ src, alt }) {

  return (
    <div className={styles.imageField}>
      <EditButton />
    </div>
  )
}

export default ImageField
