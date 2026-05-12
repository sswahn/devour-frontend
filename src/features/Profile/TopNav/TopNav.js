
import styles from './TopNav.module.css'

function TopNav() {

  return (
    <nav className={styles.topNav}>
      <CloseButton overlay={overlay.profile} close={closeOverlay} />
      <Dropdown items={dropdown} />
      <EditButton open={openEditor} /> 
    </nav>
  )
}

export default TopNav
