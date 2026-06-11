import formatRelativeTime from '../../../utilities/formatRelativeTime'
import Avatar from '../../../components/Avatar/Avatar'
import Dropdown from '../../../components/Dropdown/Dropdown'
import FlagIcon from '../../../components/Icons/FlagIcon/FlagIcon'
import XmarkIcon from '../../../components/Icons/UserXmarkIcon/UserXmarkIcon'
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
          <time datetime={notification.timestamp.toISOString().slice(0, 19)}>{formatRelativeTime(notification.timestamp)}</time>
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
