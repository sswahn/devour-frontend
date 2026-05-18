import useFullscreen from '../../../hooks/useFullscreen'
import BackButton from '../../../components/BackButton/BackButton'
import Dropdown from '../../../components/Dropdown/Dropdown'
import AlignLeftIcon from '../../../components/Icons/AlignLeftIcon/AlignLeftIcon'
import UserPlusIcon from '../../../components/Icons/UserPlusIcon/UserPlusIcon'
import FlagIcon from '../../../components/Icons/FlagIcon/FlagIcon'
import UserXmarkIcon from '../../../components/Icons/UserXmarkIcon/UserXmarkIcon'
import styles from './TopNav.module.css'

function TopNav({ exitFullScreen }) {
  const { isFullscreen } = useFullscreen()
  
  const dropdown = [
    { icon: <AlignLeftIcon />, text: 'Description', method: () => alert('Read post description.') },
    { icon: <UserPlusIcon />, text: 'Follow', method: () => alert('User followed.') },
    { icon: <FlagIcon />, text: 'Flag content', method: () => confirm('Report content?') },
    { icon: <UserXmarkIcon />, text: 'Block user', method: () => confirm('Block user?') }
  ]
  
  return (
    <nav className={`topNav ${styles.topNav} ${isFullscreen ? styles.fullScreen : ''}`} aria-label="top menu">
      {isFullscreen && <BackButton overlay="feed overlay" close={exitFullScreen} />}
      <Dropdown items={dropdown} />
    </nav>
  )
}

export default TopNav
