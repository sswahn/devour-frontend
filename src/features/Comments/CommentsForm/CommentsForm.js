import { useState } from 'react'
import useContent from '../../../hooks/useContent'
import validate from '../../utilities/validate'
import server from '../../utilities/server'
import PaperPlaneIcon from '../../../components/Icons/PaperPlaneIcon/PaperPlaneIcon'
import styles from './CommentsForm.module.css'

function CommentsForm() {
  const { content } = useContent()
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

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
      // const response = await server.post(api.comments, request)
      // loadComments or append comment to state?
      // update feed. perhaps a snackbar sucess message.
    } catch (error) {
      setErrorMessage(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className={styles.commentsForm} onSubmit={onSubmit} aria-label="comment form">
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
  )
}

export default CommentsForm
