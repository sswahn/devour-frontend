import CloseButton from '../../../components/CloseButton/CloseButton'
import Dropdown from '../../../components/Dropdown/Dropdown'
import styles from './TopNav.module.css'

function TopNav() {
  return (
    <div className={styles.topNav}>
      {/* isFullscreen && <CloseButton overlay="feed overlay" close={closeFeed} /> */}
      <Dropdown items={[1,2,3]} />
    </div>
  )
}

export default TopNav
