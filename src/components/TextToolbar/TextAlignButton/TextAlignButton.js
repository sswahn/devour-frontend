import AlignLeftIcon from '../../Icons/AlignLeftIcon/AlignLeftIcon'
import styles from './TextAlignButton.module.css'

function TextAlignButton({ openTextAlign }) {

  const onClick = event => {
    
    openTextAlign()
  }

  // all the components that open dropdowns need controls aria etc.

  return (
    <button className={styles.textAlignButton} onClick={onClick} type="button" aria-label="text alignment">
      <AlignLeftIcon />
    </button>
  )
}

export default TextAlignButton
