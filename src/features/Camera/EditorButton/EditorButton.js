import VideoFileIcon from '../../components/Icons/VideoFileIcon/VideoFileIcon'
import styles from './EditorButton.module.css'

function EditorButton() {

  const onClick = event => {
    // open video preview/editor (pre-submission flow)
  }
  
  return (
    <button className={styles.editorButton} onClick={onClick} type="button" aria-label="view footage">
      <VideoFileIcon />
    </button>
  )
}

export default EditorButton
