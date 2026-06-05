import { useRef } from 'react'
import { overlay } from '../../../config'
import useOverlay from '../../../hooks/useOverlay'
import FileVideoIcon from '../../../components/Icons/FileVideoIcon/FileVideoIcon'
import styles from './EditorButton.module.css'

function EditorButton() {
  const buttonRef = useRef(null)
  const { openOverlay } = useOverlay()
  
  const onClick = event => {    
    alert('onClick::First.')
    navigator.vibrate?.(50)
    alert('onClick::Second.')
    openOverlay(overlay.editor, buttonRef.current)
    alert('onClick::Third.')
  }
  
  return (
    <button className={styles.editorButton} ref={buttonRef} onClick={onClick} type="button" aria-label="view footage">
      <FileVideoIcon />
    </button>
  )
}

export default EditorButton
