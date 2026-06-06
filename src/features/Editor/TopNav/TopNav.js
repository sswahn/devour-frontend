import useSession from '../../../hooks/useSession'
import Avatar from '../../../components/Avatar/Avatar'
import PauseButton from '../PauseButton/PauseButton'
import MuteButton from '../MuteButton/MuteButton'
import styles from './TopNav.module.css'

function TopNav({ videoRef }) {
  const { session } = useSession()
  
  return (
    <nav className={styles.topNav}>
      <div>
        <Avatar username={session.username} image={session.picture} />
        <strong>{session.username}</strong>
      </div>
      <div>
        <PauseButton videoRef={videoRef} />
        <MuteButton videoRef={videoRef} />
      </div>
    </nav>
  )
}

export default TopNav
