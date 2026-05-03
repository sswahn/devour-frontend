import { useState, useEffect } from 'react'
import { api } from '../../config'
import useComments from '../../hooks/useComments'
import server from '../../utilities/server'
import styles from './Comments.module.css'

function Comments() {
  const { comments, setComments } = useComments()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const loadComments = async () => {
    // get data
  }
  
  const onSubmit = async event => {
    try {
      event.preventDefault()
      navigator.vibrate?.(50)
      setLoading(true)
      const formData = new FormData(event.target)
      const request = {
        comment: formData.get('comment')
      }
      const response = await server.post(api.comment, request)
      setLoading(false)
      // loadComments or append comment to state?
      // update feed. perhaps a snackbar sucess message.
    } catch (error) {
      setLoading(false)
      setErrorMessage(error)
    }
  }

  useEffect(() => {
    // loadComments()
  }, [])

  // start with only a single line height, then dynamically grow as user input moves to the next line
  
  return (
    <section className={styles.comments}>
      <form onSubmit={onSubmit} aria-label="comment form">
        <textarea
          id="comment"
          name="comment"
          maxLength="1000"
          pattern="[^<>\(\)\{\}\[\]\\\/\|;=~%^]+"
          title="Special characters are not allowed."
          placeholder="Leave a comment..."
          spellCheck="true"
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
    </section>
  )
}

export default Comments
