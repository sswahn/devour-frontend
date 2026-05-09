import CloseButton from '../../../components/CloseButton/CloseButton'
import Dropdown from '../../../components/Dropdown/Dropdown'
import styles from './TopNav.module.css'

function TopNav() {
  const isFullscreen = document.fullscreenElement
  
  return (
    <nav className={`topNav ${styles.topNav} ${isFullscreen ? styles.fullscreen : ''}`} aria-label="top menu">
      {isFullscreen && <CloseButton overlay="feed overlay" close={closeFeed} />}
      <Dropdown items={[1,2,3]} />
    </nav>
  )
}

export default TopNav
