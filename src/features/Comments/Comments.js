import { useState, useEffect } from 'react'
import { api } from '../../config'
import validate from '../../utilities/validate'
import server from '../../utilities/server'
import useContent from '../../hooks/useContent'
import PaperPlaneIcon from '../../components/Icons/PaperPlaneIcon/PaperPlaneIcon'
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


  // no longer an overlay, so need to remove css that makes it that way.
  // it is now a child of <Sidebar />
  
  return (
    <aside className={styles.comments}>
      <ul>
        {data.comments.length === 0 ? <p>No comments yet.</p> : data.comments.map(comment => 
          <li key={comment.id}>
            <article>
              <header>
                <!-- Heading hierarchy matches the entry significance -->
                <h4>Sarah Jenkins</h4>
                <time datetime="2026-05-18T09:30">May 18, 2026 at 9:30 AM</time>
              </header>
              <div>
                <p>This layout explanation is incredibly practical, thank you!</p>
              </div>
              <div>
                <button aria-label="Reply to Sarah Jenkins">Reply</button>
              </div>
            </article>
          </li>
        )}
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
    </aside>
  )
}

export default Comments
