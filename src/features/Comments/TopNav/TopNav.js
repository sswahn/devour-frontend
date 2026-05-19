import { overlay } from '../../../config'
import CloseButton from './CloseButton/CloseButton'
import styles from './TopNav.module.css'

function TopNav({ close }) {
  
  const dropdown = []
  
  return (
    <nav className={styles.topNav}>
      <BackButton overlay={overlay.comments} close={close} />
    </nav>
  )
}

export default TopNav
