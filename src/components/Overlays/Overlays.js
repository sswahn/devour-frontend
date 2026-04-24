import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { overlays } from '../../config'
import { FocusTrapProvider } from '../Providers/FocusTrapProvider'
import useOverlay from '../../hooks/useOverlay'
import Authentication from '../../features/Authentication/Authentication'
import Camera from '../../features/Camera/Camera'
import Dashboard from '../../features/Dashboard/Dashboard'
import Notifications from '../../features/Notifications/Notifications'
import Profile from '../../features/Profile/Profile'
import Search from '../../features/Search/Search'

function Overlays() {
  const { isActive } = useOverlay()
  
  return createPortal(
    <FocusTrapProvider>
      {overlays.authentication === isActive && <Authentication />}
      {overlays.camera === isActive && <Camera />}
      {overlays.dashboard === isActive && <Dashboard />}
      {overlays.notifications === isActive && <Notifications />}
      {overlays.profile === isActive && <Profile />}
      {overlays.search === isActive && <Search />}
    </FocusTrapProvider>, 
    document.getElementById('portal')
  )
}

export default Overlays
