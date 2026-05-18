import { overlay } from '../../../config'
import BackButton from '../../../components/BackButton/BackButton'
import Dropdown from '../../../components/Dropdown/Dropdown'
import styles from './TopNav.module.css'

function TopNav({ close }) {
  
  const dropdown = []
  
  return (
    <nav className={styles.topNav}>
      <BackButton overlay={overlay.comments} close={close} />
      <Dropdown items={dropdown} />
    </nav>
  )
}

export default TopNav
