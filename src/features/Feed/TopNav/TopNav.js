import CloseButton from '../../../components/CloseButton/CloseButton'
import Dropdown from '../../../components/Dropdown/Dropdown'
import UserPlusIcon from '../../../components/Icons/UserPlusIcon/UserPlusIcon'
import FlagIcon from '../../../components/Icons/FlagIcon/FlagIcon'
import UserXmarkIcon from '../../../components/Icons/UserXmarkIcon/UserXmarkIcon'
import styles from './TopNav.module.css'

function TopNav({ isFullScreen, exitFullScreen }) {

  const dropdown = [
    { icon: <UserPlusIcon />, text: 'Follow user', method: () => alert('User followed?') },
    { icon: <FlagIcon />, text: 'Flag content', method: () => confirm('Report content?') },
    { icon: <UserXmarkIcon />, text: 'Block user', method: () => confirm('Block user?') }
  ]
  
  return (
    <nav className={`topNav ${styles.topNav} ${isFullScreen ? styles.fullScreen : ''}`} aria-label="top menu">
      {isFullScreen && <CloseButton overlay="feed overlay" close={exitFullScreen} />}
      <Dropdown items={dropdown} />
    </nav>
  )
}

export default TopNav
