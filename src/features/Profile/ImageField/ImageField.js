import useDialog from '../../../hooks/useDialog'
import EditButton from '../EditButton/EditButton'
import ImageEditor from '../ImageEditor/ImageEditor'
import styles from './ImageField.module.css'

function ImageField({ src, alt }) {
  const { openDialog } = useDialog()

  const open = () => {
    openDialog(<ImageEditor />)
  }

  return (
    <div className={styles.imageField}>
      <EditButton text="image" open={open}/>
    </div>
  )
}

export default ImageField
