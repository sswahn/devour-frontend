import CloseButton from '../../../components/CloseButton/CloseButton'
import styles from './TopNav.module.css'

function TopNav({ close }) {
  
  const dropdown = []
  
  return (
    <nav className={styles.topNav}>
      <CloseButton overlay="comments" close={close} />
      <h3>Comments</h3>
    </nav>
  )
}

export default TopNav
