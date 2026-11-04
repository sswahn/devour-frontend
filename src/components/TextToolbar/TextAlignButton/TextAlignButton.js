import AlignLeftIcon from '../../Icons/AlignLeftIcon/AlignLeftIcon'
import styles from './TextAlignButton.module.css'

function TextAlignButton({ openTextAlign }) {

  const onClick = event => {
    
    openTextAlign()
  }

  return (
    <button className={styles.textAlignButton} onClick={onClick} type="button" aria-label="text align">
  
    </button>
  )
}

export default TextAlignButton
