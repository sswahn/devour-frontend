import { overlay } from '../../../config'
import BackButton from '../../../components/BackButton/BackButton'
import RecordTimer from '../RecordTimer/RecordTimer'
import LightButton from '../LightButton/LightButton'
import styles from './TopNav.module.css'

function TopNav({ close, mode, timer, setTimer, stopCamera, streamRef }) {
  return (
    <nav className={styles.topNav}>
      <BackButton overlay={overlay.camera} close={closeCamera} />
      <RecordTimer mode={mode} timer={timer} setTimer={setTimer} stopCamera={stopCamera} />
      <LightButton streamRef={streamRef} />
    </nav>
  )
}

export default TopNav
