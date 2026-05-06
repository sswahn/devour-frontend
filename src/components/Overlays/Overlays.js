import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { overlay } from '../../config'
import FocusTrap from '../FocusTrap/FocusTrap'
import useOverlay from '../../hooks/useOverlay'
import Camera from '../../features/Camera/Camera'
import Comments from '../../features/Comments/Comments'
import Dashboard from '../../features/Dashboard/Dashboard'
import Notifications from '../../features/Notifications/Notifications'
import Login from '../../features/Login/Login'
import Profile from '../../features/Profile/Profile'
import Register from '../../features/Register/Register'
import Search from '../../features/Search/Search'

function Overlays() {
  const { isActive } = useOverlay()
  
  return !!isActive && createPortal(
    <FocusTrap>
      {overlay.camera === isActive && <Camera />}
      {overlay.comments === isActive && <Comments />}
      {overlay.dashboard === isActive && <Dashboard />}
      {overlay.notifications === isActive && <Notifications />}
      {overlay.login === isActive && <Login />}
      {overlay.profile === isActive && <Profile />}
      {overlay.register === isActive && <Register />}
      {overlay.search === isActive && <Search />}
    </FocusTrap>, 
    document.getElementById('portal')
  )
}

export default Overlays
