import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { overlays } from '../../config'
import { FocusTrapProvider } from '../Providers/FocusTrapProvider'
import useOverlay from '../../hooks/useOverlay'
import Authentication from '../../features/Authentication/Authentication'
import Dashboard from '../../features/Dashboard/Dashboard'
import SearchForm from '../../features/SearchForm/SearchForm'
import Camera from '../../features/Camera/Camera'
import Notifications from '../../features/Notifications/Notifications'
import Profile from '../../features/Profile/Profile'

function Overlays() {
  const { isActive } = useOverlay()
  
  return createPortal(
    <FocusTrapProvider>
      {overlays.authentication === isActive && <Authentication />}
      {overlays.dashboard === isActive && <Dashboard />}
      {overlays.search === isActive && <SearchForm />}
      {overlays.camera === isActive && <Camera />}
      {overlays.notifications === isActive && <Notifications />}
      {overlays.profile === isActive && <Profile />}
    </FocusTrapProvider>, 
    document.getElementById('portal')
  )
}

export default Overlays
