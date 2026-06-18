import { overlay } from '../../../config'
import BackButton from '../../../components/BackButton/BackButton'
import Dropdown from '../../../components/Dropdown/Dropdown'
import styles from './TopNav.module.css'

function TopNav({ close }) {

  // might need something other than search filters
  const dropdown = [
    { icon: '', text: 'Filter 1', method: () => console.log('Filter 1') },
    { icon: '', text: 'Filter 2', method: () => console.log('Filter 2') }
  ]
  
  return (
    <nav className={styles.topNav}>
      <BackButton overlay={overlay.search} close={close} />
      {/* dont forget dropdown requires icons too. */}
      <Dropdown items={dropdown} />
    </nav>
  )
}

export default TopNav
