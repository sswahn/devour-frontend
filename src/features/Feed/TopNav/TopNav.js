import CloseButton from '../../../components/CloseButton/CloseButton'
import Dropdown from '../../../components/Dropdown/Dropdown'

function TopNav() {
  return (
    <div>
      {/* isFullscreen && <CloseButton overlay="feed overlay" close={closeFeed} /> */}
      <Dropdown items={[1,2,3]} />
    </div>
  )
}

export default TopNav
