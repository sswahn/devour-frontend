

function CommentsListItem({ comment }) {
  return (
    <li key={comment.id}>
      <article>
        <header>
          <h4>{comment.username}</h4>
          <time datetime={comment.datetime}>comment.datetime</time>
          {/* <Dropdown /> */}
        </header>
        <p>{comment.text}</p>
        <div>
          {/* like button */}
        </div>
      </article>
    </li>
  )
}

export default CommentsListItem
