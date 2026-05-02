import EditButton from '../EditButton/EditButton'
import styles from './ImageField.module.css'

function ImageField({ src, alt }) {

  const open = () => {
    // open image modal
    // 
  }

  return (
    <div className={styles.imageField}>
      <EditButton text="image" open={open}/>
    </div>
  )
}

export default ImageField
