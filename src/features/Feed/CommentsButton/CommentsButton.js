import { useRef } from 'react'
import useOverlay from '../../../hooks/useOverlay'
import CommentIcon from '../../../components/Icons/CommentIcon/CommentIcon'
import styles from './CommentsButton.module.css'

function CommentsButton() {
  const buttonRef = useRef(null)
  const { openOverlay } = useOverlay()
  
  const action = () => {
    openOverlay(overlay.comments, buttonRef.current)
  }
  
  const onClick = event => {
    navigator.vibrate?.(50)
    action()
  }
  
  const onKeyDown = event => {
    if (event.key === 'Enter') {
      event.preventDefault()
      action()
    }
  }
  
  return (
    <button className={styles.commentsButton} onClick={onClick} onKeyDown={onKeyDown} ref={buttonRef} type="button" aria-label="leave a comment">
      <CommentIcon />
    </button>
  )
}

export default CommentsButton
