import { overlay } from '../../../config'
import useOverlay from '../../../hooks/useOverlay'
import BackButton from '../../../components/BackButton/BackButton'
import Dropdown from '../../../components/Dropdown/Dropdown'
import styles from './TopNav.module.css'

function TopNav() {
  const { closeOverlay } = useOverlay()
  const dropdown = []
  
  return (
    <nav className={styles.topNav}>
      <BackButton overlay={overlay.comments} close={closeOverlay} />
      <Dropdown items={dropdown} />
    </nav>
  )
}

export default TopNav
