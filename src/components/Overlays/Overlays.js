import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { overlay } from '../../config'
import useOverlay from '../../hooks/useOverlay'
import FocusTrap from '../FocusTrap/FocusTrap'
import Dashboard from '../../features/Dashboard/Dashboard'
import Editor from '../../features/Editor/Editor'
import Notifications from '../../features/Notifications/Notifications'
import Login from '../../features/Login/Login'
import Profile from '../../features/Profile/Profile'
import Register from '../../features/Register/Register'
import Search from '../../features/Search/Search'
import Wizard from '../../features/Wizard/Wizard'

function Overlays() {
  const { isActive } = useOverlay()
  
  return !!isActive && createPortal(
    <FocusTrap>
      {overlay.dashboard === isActive && <Dashboard />}
      {overlay.editor === isActive && <Editor />}
      {overlay.notifications === isActive && <Notifications />}
      {overlay.login === isActive && <Login />}
      {overlay.profile === isActive && <Profile />}
      {overlay.register === isActive && <Register />}
      {overlay.search === isActive && <Search />}
      {overlay.wizard === isActive && <Wizard />}
    </FocusTrap>, 
    document.getElementById('portal')
  )
}

export default Overlays
