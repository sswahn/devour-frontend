import EditIcon from '../../../components/Icons/EditIcon/EditIcon'
import SearchIcon from '../../components/Icons/SearchIcon/SearchIcon'
import MessageIcon from '../../components/Icons/MessageIcon/MessageIcon'
import FlagIcon from '../../components/Icons/FlagIcon/FlagIcon'
import UserXmarkIcon from '../../components/Icons/UserXmarkIcon/UserXmarkIcon'
import styles from './TopNav.module.css'

function TopNav({ openEditor }) {

  const dropdown = [
    { icon: <EditIcon />, text: 'Edit profile', method: () => openEditor() },
    { icon: <SearchIcon />, text: 'Search profile', method: () => alert('Search profile.') },
    { icon: <MessageIcon />, text: 'Send message', method: () => alert('DM opened.') },
    { icon: <FlagIcon />, text: 'Flag profile', method: () => confirm('Report profile?') },
    { icon: <UserXmarkIcon />, text: 'Block user', method: () => confirm('Block user?') }
  ]

  return (
    <nav className={styles.topNav}>
      <CloseButton overlay={overlay.profile} close={closeOverlay} />
      <Dropdown items={dropdown} />
    </nav>
  )
}

export default TopNav
