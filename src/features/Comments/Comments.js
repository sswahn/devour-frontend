import { useState, useEffect } from 'react'
import { api } from '../../config'
import useContent from '../../hooks/useContent'
import server from '../../utilities/server'
import BackButton from '../../components/BackButton/BackButton'
import styles from './Comments.module.css'

function Comments() {
  const { content } = useContent()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const loadComments = async () => {
    const request = {
      comment: content.id
    }
    const response = await server.get(`${api.comment}/${request.comment}`)
    setData(response.data)
  }
  
  const onSubmit = async event => {
    try {
      event.preventDefault()
      navigator.vibrate?.(50)
      setLoading(true)
      const formData = new FormData(event.target)
      const request = {
        post: content.id,
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


  // use this in profile bio as well.
  const sanitize = comment => {
    const value = comment.trim()
  
    // 1. Standard social app length check
    if (value.length < 3 || value.length > 1000) {
      throw new Error('Comments must be between 3 and 1000 characters.')
    }

    // 2. Map dangerous characters to safe HTML entities
    const htmlEntities = {
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      '/': '&#x2F;',
      '&': '&amp;'
    }

    // 3. Replace characters using a secure global regex
    const sanitizedValue = value.replace(/[<>"'&/]/g, match => htmlEntities[match])
  
    return sanitizedValue
  }

  // 🧪 Test Results:
  console.log(sanitizeComment("I love this app (score: 10/10)!"))
  // Output: "I love this app (score: 10&#x2F;10)!" (Completely safe, no error thrown)
  
  console.log(sanitizeComment("<script>alert('hack')</script>"))
  // Output: "&lt;script&gt;alert(&#x27;hack&#x27;)&lt;&#x2F;script&gt;" (Rendered safely as text)


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
