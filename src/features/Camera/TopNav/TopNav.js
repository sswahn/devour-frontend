import { overlay } from '../../../config'
import BackButton from '../../../components/BackButton/BackButton'
import RecordTimer from '../RecordTimer/RecordTimer'
import LightButton from '../LightButton/LightButton'
import styles from './TopNav.module.css'

function TopNav({ closeCamera, mode, setIsExpired, streamRef }) {
  return (
    <nav className={styles.topNav}>
      <BackButton overlay={overlay.camera} close={closeCamera} />
      <RecordTimer mode={mode} setIsExpired={setIsExpired} />
      <LightButton streamRef={streamRef} />
    </nav>
  )
}

export default TopNav
