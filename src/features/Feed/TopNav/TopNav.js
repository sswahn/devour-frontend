import CloseButton from '../../../components/CloseButton/CloseButton'
import Dropdown from '../../../components/Dropdown/Dropdown'
import styles from './TopNav.module.css'

function TopNav({ isFullScreen, exitFullScreen }) {
  return (
    <nav className={`topNav ${styles.topNav} ${isFullScreen ? styles.fullScreen : ''}`} aria-label="top menu">
      {isFullScreen && <CloseButton overlay="feed overlay" close={exitFullScreen} />}
      <Dropdown items={[1,2,3]} />
    </nav>
  )
}

export default TopNav
