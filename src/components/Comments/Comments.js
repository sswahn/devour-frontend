import { config } from '../../config'
import server from '../../utilities/server'
import styles from './Comments.module.css'

// consider moving to features

function Commets() {
  // Comments Form
  // Comments Feed

  const onClick = event => {
    navigator.vibrate?.(50)
  }

  const onSubmit = async event => {
    event.preventDefault()
    
    // perform basic validation, at least .trim()
    
    const formData = new FormData(event.target)
    const request = {
      comment: formData.get('comment')
    }

    console.log('request: ', request)
    
    // const response = await server.post(config.api.comment, request)
    
    // update feed.
  }
  
  return (
    <section>
      <form className={styles.comments} onSubmit={onSubmit} aria-label="comment form">
        <textarea 
          name={comment}
          maxLength="1000"
          pattern="[^<>\(\)\{\}\[\]\\\/\|;=~%^]+"
          title="Special characters are not allowed."
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
