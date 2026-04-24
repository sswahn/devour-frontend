import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { overlays } from '../../config'
import { FocusTrapProvider } from '../Providers/FocusTrapProvider'
import Authentication from '../../features/Authentication/Authentication'
import Dashboard from '../Dashboard/Dashboard'
import SearchForm from '../SearchForm/SearchForm'
import Camera from '../../features/Camera/Camera'
import Notifications from '../Notifications/Notifications'
import Profile from '../Profile/Profile'

function Overlays({ isActive, closeOverlay }) {
  return createPortal(
    <FocusTrapProvider>
      {overlays.authentication === isActive && <Authentication closeOverlay={closeOverlay} />}
      {overlays.dashboard === isActive && <Dashboard closeOverlay={closeOverlay} />}
      {overlays.search === isActive && <SearchForm closeOverlay={closeOverlay} />}
      {overlays.camera === isActive && <Camera closeOverlay={closeOverlay} />}
      {overlays.notifications ==== isActive && <Notifications closeOverlay={closeOverlay} />}
      {overlays.profile === isActive && <Profile closeOverlay={closeOverlay} />}
    </FocusTrapProvider>, 
    document.getElementById('portal')
  )
}

export default Overlays
