import useSession from '../../../hooks/useSession'
import BackButton from '../../../components/BackButton/BackButton'
import PauseButton from '../PauseButton/PauseButton'
import MuteButton from '../MuteButton/MuteButton'
import styles from './TopNav.module.css'

function TopNav({ videoRef,  }) {
  const { session } = useSession()
  
  return (
    <nav className={styles.topNav}>
      <BackButton overlay={} close={} />
      <div>
        <PauseButton videoRef={videoRef} />
        <MuteButton videoRef={videoRef} />
      </div>
    </nav>
  )
}

export default TopNav
