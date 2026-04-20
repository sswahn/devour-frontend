import { useRef } from 'react'
import useFocusStack from '../../../hooks/useFocusStack'
import CommentIcon from '../../../components/Icons/CommentIcon/CommentIcon'
import styles from 'CommentsButton.module.css'

function CommentsButton({ openComments }) {
  const { push } = useFocusStack()
  const buttonRef = useRef(null)
  
  const action = () => {
    openComments()
    push(buttonRef.current)
  }
  
  const onClick = event => {
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
