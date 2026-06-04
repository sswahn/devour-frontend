import { useRef } from 'react'
import { overlay } from '../../../config'
import useOverlay from '../../../hooks/useOverlay'
import FileVideoIcon from '../../../components/Icons/FileVideoIcon/FileVideoIcon'
import styles from './EditorButton.module.css'

function EditorButton() {
  const buttonRef = useRef(null)
  
  const onClick = event => {
    navigator.vibrate?.(50)
    openOverlay(overlay.editor, buttonRef.current)
  }
  
  return (
    <button className={styles.editorButton} ref={buttonRef} onClick={onClick} type="button" aria-label="view footage">
      <FileVideoIcon />
    </button>
  )
}

export default EditorButton
