import Avatar from '../../../../components/Avatar/Avatar'
import PauseButton from './PauseButton/PauseButton'
import MuteButton from './MuteButton/MuteButton'
import styles from './TopNav.module.css'

function TopNav({ videoRef }) {
  return (
    <nav className={styles.topNav}>
      <Avatar username={username} />
      <strong>{username}</strong>
      <PauseButton videoRef={videoRef}
      <MuteButton videoRef={videoRef} />
    </nav>
  )
}

export default TopNav
