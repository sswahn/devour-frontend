import styles from './CommentsForm.module.css'

function CommentsForm() {

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
