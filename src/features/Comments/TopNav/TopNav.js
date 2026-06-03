import CloseButton from '../CloseButton/CloseButton'
import styles from './TopNav.module.css'

function TopNav({ close }) {
  
  const dropdown = []
  
  return (
    <nav className={styles.topNav}>
      <CloseButton close={close} />
      <h3>Comments</h3>
    </nav>
  )
}

export default TopNav
