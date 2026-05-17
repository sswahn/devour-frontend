import { overlay } from '../../../config'
import useOverlay from '../../../hooks/useOverlay'
import BackButton from '../../../components/BackButton/BackButton'
import Dropdown from '../../../components/Dropdown/Dropdown'

function TopNav() {
  const { closeOverlay } = useOverlay()
  const dropdown = []
  
  return (
    <nav>
      <BackButton overlay={overlay.comments} close={closeOverlay} />
      <Dropdown items={dropdown} />
    </nav>
  )
}

export default TopNav
