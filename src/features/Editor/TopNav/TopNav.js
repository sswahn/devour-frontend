import { overlay } from '../../../config'
import useSession from '../../../hooks/useSession'
import BackButton from '../../../components/BackButton/BackButton'
import PauseButton from '../PauseButton/PauseButton'
import MuteButton from '../MuteButton/MuteButton'
import styles from './TopNav.module.css'

function TopNav({ videoRef, openCamera }) {
  const { session } = useSession()
  
  return (
    <nav className={styles.topNav}>
      <BackButton overlay={overlay.editor} close={openCamera} />
      <div>
        <PauseButton videoRef={videoRef} />
        <MuteButton videoRef={videoRef} />
      </div>
    </nav>
  )
}

export default TopNav
