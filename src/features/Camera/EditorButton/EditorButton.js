import FileVideoIcon from '../../../components/Icons/FileVideoIcon/FileVideoIcon'
import styles from './EditorButton.module.css'

function EditorButton({ openEditor }) {

  const onClick = event => {    
    navigator.vibrate?.(50)
    openEditor()
  }
  
  return (
    <button className={styles.editorButton} onClick={onClick} type="button" aria-label="view footage">
      <FileVideoIcon />
    </button>
  )
}

export default EditorButton
