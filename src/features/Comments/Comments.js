import { config } from '../../config'
import server from '../../utilities/server'
import styles from './Comments.module.css'

function Commets() {
  
  const onClick = event => {
    navigator.vibrate?.(50)
  }

  const onSubmit = async event => {
    event.preventDefault()

    const formData = new FormData(event.target)
    const request = {
      comment: formData.get('comment')
    }

    console.log('request: ', request)
    
    // const response = await server.post(config.api.comment, request)
    
    // update feed.
  }

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
        <button onClick={onClick} type="submit" aria-label="submit comment">Submit</button>
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
