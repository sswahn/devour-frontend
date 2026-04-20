import { useRef } from 'react'
import CommentsIcon from '../../../components/Icons/CommentsIcon/CommentsIcon'
import styles from 'CommentsButton.module.css'

function CommentsButton() {
  const buttonRef = useRef(null)
  
  const action = () => {
    // openComments()
    // push(buttonRef.current)
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
      <CommentsIcon />
    </button>
  )
}

export default CommentsButton
