import { useRef } from 'react'
import { overlay } from '../../../config'
import useOverlay from '../../../hooks/useOverlay'
import MessageIcon from '../../../components/Icons/MessageIcon/MessageIcon'
import styles from './CommentsButton.module.css'

function CommentsButton({ openComments }) {
  const buttonRef = useRef(null)
  
  const onClick = event => {
    navigator.vibrate?.(50)
    openComments()
  }
  
  return (
    <button className={styles.commentsButton} onClick={onClick} ref={buttonRef} type="button" aria-label="leave a comment">
      <MessageIcon />
    </button>
  )
}

export default CommentsButton
