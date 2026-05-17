import { useRef } from 'react'
import { overlay } from '../../../config'
import useOverlay from '../../../hooks/useOverlay'
import useSidebar from '../../../hooks/useSidebar'
import MessageIcon from '../../../components/Icons/MessageIcon/MessageIcon'
import Comments from '../../Comments/Comments'
import styles from './CommentsButton.module.css'

function CommentsButton() {
  const buttonRef = useRef(null)
  const { openSidebar } = useSidebar()
  
  const onClick = event => {
    navigator.vibrate?.(50)
    openSidebar(<Comments />)
  }
  
  return (
    <button className={styles.commentsButton} onClick={onClick} ref={buttonRef} type="button" aria-label="leave a comment">
      <MessageIcon />
    </button>
  )
}

export default CommentsButton
