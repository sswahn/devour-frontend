import { useState, useRef, useEffect } from 'react'
import { api } from '../../config'
import validate from '../../utilities/validate'
import server from '../../utilities/server'
import useContent from '../../hooks/useContent'
import TopNav from './TopNav/TopNav'
import CommentsListItem from './CommentsListItem/CommentsListItem'
import PaperPlaneIcon from '../../components/Icons/PaperPlaneIcon/PaperPlaneIcon'
import styles from './Comments.module.css'

function Comments({ closeComments }) {
  const { content } = useContent()
  const [isOpen, setIsOpen] = useState(false)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const commentsRef = useRef(null)

  const close = () => {
    setIsOpen(false)
    commentsRef.current.addEventListener('transitionend', closeComments, {
      once: true,
    })
  }

  const loadComments = async () => {
    const request = {
      id: content.id
    }
    const response = await server.get(`${api.comments}/${request.id}`)
    setData(response.data)
  }
  
  const onSubmit = async event => {
    try {
      event.preventDefault()
      navigator.vibrate?.(50)
      setLoading(true)
      const formData = new FormData(event.target)
      const comment = formData.get('comment').trim()
      const request = {
        id: content.id,
        comment: validate.comment(comment)
      }
      const response = await server.post(api.comments, request)
      // loadComments or append comment to state?
      // update feed. perhaps a snackbar sucess message.
    } catch (error) {
      setErrorMessage(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    // loadComments()
  }, [])

  useEffect(() => {
    requestAnimationFrame(() => {
      if (!isOpen) {
        setIsOpen(true)
      }
    })
  }, [])


  // needs PointerEvents and hook swipeToClose; should only swipe closed to the side it opened from.
  
  return (
    <aside className={styles.overlay} ref={commentsRef}>
      <div className={[
          styles.comments,
          isOpen === true && styles.open,
          isOpen === false && styles.close
        ].filter(Boolean).join(' ')}>
        <TopNav close={close} />
        <ul>
          {data.length === 0 
            ? <li>No comments yet.</li> 
            : data.map(comment => <CommentsListItem comment={comment} />)
          }
        </ul>
        <form onSubmit={onSubmit} aria-label="comment form">
          <textarea
            id="comment"
            name="comment"
            spellCheck="true"
            enterkeyhint="send"
            required
            placeholder="Leave a comment..."
            aria-label="comment input">
            </textarea>
          <button type="submit" aria-label="submit comment">
            <PaperPlaneIcon />    
          </button>
        </form>
      </div>
    </aside>
  )
}

export default Comments
