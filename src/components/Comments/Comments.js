
import styles from './Comments.module.css'

function Commets() {

  // Comments Form
  // Comments Feed

  const onClick = event => {
    navigator.vibrate?.(50)
  }

  const onSubmit = event => {
    
  }
  
  return (
    <section>
      <form className={styles.comments} onSubmit={onSubmit} aria-label="comment form">
        <textarea></textarea>
        <button onClick={onClick} type="submit">Submit</button>
      </form>
      <div>
        {data.comments.map(comment => 
          <div key={comment.id}>{comment}</div>            
        )}
      </div>
    </section>
  )
}

export default Comments
