import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { FocusTrapProvider } from '../Providers/FocusTrapProvider'
import Authentication from '../../features/Authentication/Authentication'
import SearchForm from '../SearchForm/SearchForm'
import Camera from '../../features/Camera/Camera'
import Notifications from '../Notifications/Notifications'
import Profile from '../Profile/Profile'

function Overlays({ 
  authenticationIsOpen,
  searchIsOpen, 
  cameraIsOpen, 
  notificationsIsOpen, 
  profileIsOpen, 
  closeAuthentication,
  closeSearch, 
  closeCamera, 
  closeNotifications, 
  closeProfile 
}) {
  
  // Move this to each overlay and set the eventlistener to the overlay?
  // its no longer a switch then, but a typical onKeyDown function using 'Escape'
  const closeOverlay = event => {
    if (event.key !== 'Escape') {
      return 
    }
    event.preventDefault()
    const modal = event.target.closest('[role="dialog"]')
    switch(modal?.id) {
      case 'search':
        return closeSearch()
      case 'camera':
        return closeCamera()
      case 'notifications':
        return closeNotifications()
      case 'profile':
        return closeProfile()
      default:
    }
  }
  
  useEffect(() => {
    document.addEventListener('keydown', closeOverlay)
    return () => {
      document.removeEventListener('keydown', closeOverlay)
    }
  }, [])

  return createPortal(
    <FocusTrapProvider>
      {authenticationIsOpen && <Authentication closeAuthentication={closeAuthentication} />}
      {searchIsOpen && <SearchForm closeSearch={closeSearch} />}
      {cameraIsOpen && <Camera closeCamera={closeCamera} />}
      {notificationsIsOpen && <Notifications closeNotifications={closeNotifications} />}
      {profileIsOpen && <Profile closeProfile={closeProfile} />}
    </FocusTrapProvider>, 
    document.getElementById('portal')
  )
}

export default Overlays
