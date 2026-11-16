import { overlay } from '../../../config'
import BackButton from '../../../components/BackButton/BackButton'
import PauseButton from '../PauseButton/PauseButton'
import MuteButton from '../MuteButton/MuteButton'
import styles from './TopNav.module.css'

function TopNav({ videoRef, openCamera, programmaticPause }) {
  return (
    <nav className={styles.topNav}>
      <BackButton overlay={overlay.editor} close={openCamera} />
      <div>
        <PauseButton videoRef={videoRef} programmaticPause={programmaticPause} />
        <MuteButton videoRef={videoRef} />
      </div>
    </nav>
  )
}

export default TopNav
