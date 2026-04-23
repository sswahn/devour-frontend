import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { FocusTrapProvider } from '../Providers/FocusTrapProvider'
import useProfile from '../../hooks/useProfile'
import Authentication from '../../features/Authentication/Authentication'
import Dashboard from '../Dashboard/Dashboard'
import SearchForm from '../SearchForm/SearchForm'
import Camera from '../../features/Camera/Camera'
import Notifications from '../Notifications/Notifications'
import Profile from '../Profile/Profile'

function Overlays({ 
  authenticationIsOpen,
  dashboardIsOpen,
  searchIsOpen, 
  cameraIsOpen, 
  notificationsIsOpen, 
  closeAuthentication,
  closeDashboard,
  closeSearch, 
  closeCamera, 
  closeNotifications 
}) {

  const { profileIsOpen } = useProfile()
  
  return createPortal(
    <FocusTrapProvider>
      {authenticationIsOpen && <Authentication closeAuthentication={closeAuthentication} />}
      {dashboardIsOpen && <Dashboard closeDashboard={closeDashboard} />}
      {searchIsOpen && <SearchForm closeSearch={closeSearch} />}
      {cameraIsOpen && <Camera closeCamera={closeCamera} />}
      {notificationsIsOpen && <Notifications closeNotifications={closeNotifications} />}
      {profileIsOpen && <Profile />}
    </FocusTrapProvider>, 
    document.getElementById('portal')
  )
}

export default Overlays
