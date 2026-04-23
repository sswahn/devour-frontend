import { useState, useRef, useEffect, Suspense, lazy } from 'react'
import Header from '../Header/Header'
import Main from '../Main/Main'
import MobileNav from '../MobileNav/MobileNav'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
const Overlays = lazy(() => import('../Overlays/Overlays'))

function Interface() {
  const [authenticationIsOpen, setAuthenticationIsOpen] = useState(false)
  const [dashboardIsOpen, setDashboardIsOpen] = useState(false)
  const [searchIsOpen, setSearchIsOpen] = useState(false)
  const [cameraIsOpen, setCameraIsOpen] = useState(false)
  const [notificationsIsOpen, setNotificationsIsOpen] = useState(false)
  
  const openAuthentication = () => setAuthenticationIsOpen(true)
  const closeAuthentication = () => setAuthenticationIsOpen(false)

  const openDashboard = () => setDashboardIsOpen(true)
  const closeDashboard = () => setDashboardIsOpen(false)
  
  const openSearch = () => setSearchIsOpen(true)
  const closeSearch = () => setSearchIsOpen(false)

  const openCamera = () => setCameraIsOpen(true)
  const closeCamera = () => setCameraIsOpen(false)

  const openNotifications = () => setNotificationsIsOpen(true)
  const closeNotifications = () => setNotificationsIsOpen(false)

  return (
    <>
      <Header 
        openAuthentication={openAuthentication} 
        openDashboard={openDashboard}
      />
      <Main />
      <MobileNav 
        openSearch={openSearch}
        openCamera={openCamera}
        openNotifications={openNotifications}
      />
      <Suspense fallback={<LoadingSpinner />}>
        <Overlays 
          authenticationIsOpen={authenticationIsOpen}
          dashboardIsOpen={dashboardIsOpen}
          searchIsOpen={searchIsOpen} 
          cameraIsOpen={cameraIsOpen}
          notificationsIsOpen={notificationsIsOpen}
          closeAuthentication={closeAuthentication}
          closeSearch={closeSearch}
          closeCamera={closeCamera}
          closeNotifications={closeNotifications}
        />
      </Suspense>
    </>
  )
}

export default Interface
