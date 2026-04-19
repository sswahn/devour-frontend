import { useState, useRef, useEffect, Suspense, lazy } from 'react'
import Header from '../Header/Header'
import Main from '../Main/Main'
import MobileNav from '../MobileNav/MobileNav'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
const Overlays = lazy(() => import('../Overlays/Overlays'))

function Interface() {
  const [authenticationIsOpen, setAuthenticationIsOpen] = useState(false)
  const [searchIsOpen, setSearchIsOpen] = useState(false)
  const [cameraIsOpen, setCameraIsOpen] = useState(false)
  const [notificationsIsOpen, setNotificationsIsOpen] = useState(false)
  const [profileIsOpen, setProfileIsOpen] = useState(false)
  
  const openAuthentication = () => setAuthenticationIsOpen(true)
  const closeAuthentication = () => setAuthenticationIsOpen(false)
  
  const openSearch = () => setSearchIsOpen(true)
  const closeSearch = () => setSearchIsOpen(false)

  const openCamera = () => setCameraIsOpen(true)
  const closeCamera = () => setCameraIsOpen(false)

  const openNotifications = () => setNotificationsIsOpen(true)
  const closeNotifications = () => setNotificationsIsOpen(false)

  const openProfile = () => setProfileIsOpen(true)
  const closeProfile = () => setProfileIsOpen(false)

  return (
    <>
      <Header openAuthentication={openAuthentication} />
      <Main />
      <MobileNav 
        openSearch={openSearch}
        openCamera={openCamera}
        openNotifications={openNotifications}
        openProfile={openProfile}
      />
      <Suspense fallback={<LoadingSpinner />}>
        <Overlays 
          authenticationIsOpen={authenticationIsOpen}
          searchIsOpen={searchIsOpen} 
          cameraIsOpen={cameraIsOpen}
          notificationsIsOpen={notificationsIsOpen}
          profileIsOpen={profileIsOpen}
          closeAuthentication={closeAuthentication}
          closeSearch={closeSearch}
          closeCamera={closeCamera}
          closeNotifications={closeNotifications}
          closeProfile={closeProfile}
        />
      </Suspense>
    </>
  )
}

export default Interface
