import useDialog from '../../../hooks/useDialog'
import EditImageButton from '../EditImageButton/EditImageButton'
import ImageEditor from '../ImageEditor/ImageEditor'
import styles from './ImageField.module.css'

function ImageField({ src, alt }) {
  const { openDialog } = useDialog()

  const open = () => {
    openDialog(<ImageEditor />)
  }

  return (
    <div className={styles.imageField}>
      <EditImageButton open={open}/>
    </div>
  )
}

export default ImageField
