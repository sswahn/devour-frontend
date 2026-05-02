import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { overlays } from '../../config'
import { FocusTrapProvider } from '../Providers/FocusTrapProvider'
import useOverlay from '../../hooks/useOverlay'
import Camera from '../../features/Camera/Camera'
import Dashboard from '../../features/Dashboard/Dashboard'
import Notifications from '../../features/Notifications/Notifications'
import Login from '../../features/Login/Login'
import Profile from '../../features/Profile/Profile'
import Register from '../../features/Register/Register'
import Search from '../../features/Search/Search'

function Overlays() {
  const { isActive } = useOverlay()
  
  return createPortal(
    <FocusTrapProvider>
      {overlays.camera === isActive && <Camera />}
      {overlays.dashboard === isActive && <Dashboard />}
      {overlays.notifications === isActive && <Notifications />}
      {overlays.login === isActive && <Login />}
      {overlays.profile === isActive && <Profile />}
      {overlays.register === isActive && <Register />}
      {overlays.search === isActive && <Search />}
    </FocusTrapProvider>, 
    document.getElementById('portal')
  )
}

export default Overlays
