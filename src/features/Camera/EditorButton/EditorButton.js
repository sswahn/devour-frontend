import FileVideoIcon from '../../../components/Icons/FileVideoIcon/FileVideoIcon'
import styles from './EditorButton.module.css'

function EditorButton() {

  const onClick = event => {
    // open video preview/editor (pre-submission flow)
  }
  
  return (
    <button className={styles.editorButton} onClick={onClick} type="button" aria-label="view footage">
      <FileVideoIcon />
    </button>
  )
}

export default EditorButton
