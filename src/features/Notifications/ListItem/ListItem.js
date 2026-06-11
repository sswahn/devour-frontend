import Avatar from '../../Avatar/Avatar'
import styles from './ListItem.module.css'

function ListItem({ notification }) {

  const dropdown = [
    { icon: <FlagIcon />, text: 'Flag notification', method: () => confirm('Flag notification?') },
    { icon: <XmarkIcon />, text: 'Delete notification', method: () => confirm('Delete notification?') }
  ]
  
  return (
    <li className={styles.listItem} key={notification.id}>
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

export default ListItem
