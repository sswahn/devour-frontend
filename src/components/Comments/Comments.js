
import styles from './Comments.module.css'

// consider moving to features

function Commets() {

  // Comments Form
  // Comments Feed

  const onClick = event => {
    navigator.vibrate?.(50)
  }

  const onSubmit = event => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const request = {
      comment: formData.get('comment')
    }

    console.log('request: ', request)
    
    //if (!event.target.firstElementChild.value.trim()) {
      return
    //}
  }
  
  return (
    <section>
      <form className={styles.comments} onSubmit={onSubmit} aria-label="comment form">
        <textarea 
          name={comment}
          maxLength="288"
          pattern="[^<>\(\)\{\}\[\]\\\/\|;=~%^]+"
          title="Special characters are not allowed."
          spellCheck="true"
          required
          aria-label="comment input">
          </textarea>
        <button onClick={onClick} type="submit">Submit</button>
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
