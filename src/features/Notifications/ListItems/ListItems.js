import Avatar from '../../Avatar/Avatar'
import styles from './ListItems.module.css'


function ListItems() {

  return (
    <li className={styles.listItems} key={notification.id}>
      <article>
        <header>
          <Avatar username={notification.username} image={null} />
          <h2>{notification.username}</h2>
          <time datetime={notification.timestamp}>{notification.timestamp}</time>
        </header>
        <div>
          <p>{notification.text}</p>
        </div>
        <footer>
          <Dropdown items={dropdown} />
        </footer>
      </article>
    </li>   
  )
}

export default ListItems
