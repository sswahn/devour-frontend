import CloseButton from '../../../components/CloseButton/CloseButton'
import Dropdown from '../../../components/Dropdown/Dropdown'
import styles from './TopNav.module.css'

function TopNav() {

  // might need something other than search filters
  const dropdown = [
    { icon: '', text: 'filter 1', method: () => console.log('filter 1') },
    { icon: '', text: 'filter 2', method: () => console.log('filter 2') }
  ]
  
  return (
    <nav className={styles.topNav}>
      <CloseButton overlay={overlay.search} close={action} />
      {/* dont forget dropdown requires icons too. */}
      <Dropdown items={dropdown} />
    </nav>
  )
}

export default TopNav
