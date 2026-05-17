import { useState, useEffect } from 'react'
import { api } from '../../config'
import validate from '../../utilities/validate'
import server from '../../utilities/server'
import useContent from '../../hooks/useContent'
import BackButton from '../../components/BackButton/BackButton'
import styles from './Comments.module.css'

function Comments() {
  const { content } = useContent()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

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

  // start with only a single line height, then dynamically grow as user input moves to the next line
  
  return (
    <section className={styles.comments}>
      <div>
        <form onSubmit={onSubmit} aria-label="comment form">
          <textarea
            id="comment"
            name="comment"
            maxLength="1000"
            placeholder="Leave a comment..."
            spellCheck="true"
            enterkeyhint="send"
            required
            aria-label="comment input">
            </textarea>
          <button type="submit" aria-label="submit comment">Submit</button>
        </form>
        <div>
          {/* data.comments.map(comment => 
            <div key={comment.id}>{comment}</div>            
          ) */}
        </div>
      </div>
    </section>
  )
}

export default Comments
