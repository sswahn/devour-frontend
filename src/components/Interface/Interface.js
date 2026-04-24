import { useState, useRef, useEffect, Suspense, lazy } from 'react'
import { overlays } from '../../config'
import useProfile from '../../hooks/useProfile'
import Header from '../Header/Header'
import Main from '../Main/Main'
import MobileNav from '../MobileNav/MobileNav'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
const Overlays = lazy(() => import('../Overlays/Overlays'))

function Interface() {
  const { profileIsOpen, openProfile, closeProfile } = useProfile()
  const [isActive, setIsActive] = useState(undefined)
  /*
  const [authenticationIsOpen, setAuthenticationIsOpen] = useState(false)
  const [dashboardIsOpen, setDashboardIsOpen] = useState(false)
  const [searchIsOpen, setSearchIsOpen] = useState(false)
  const [cameraIsOpen, setCameraIsOpen] = useState(false)
  const [notificationsIsOpen, setNotificationsIsOpen] = useState(false)
  */

  const closeOverlay = () => setIsActive(undefined)
  
  const openAuthentication = () => setIsActive(overlays.authentication)

  const openDashboard = () => setIsActive(overlays.dashboard)
  
  const openSearch = () => setIsActive(overlays.search)

  const openCamera = () => setIsActive(overlays.camera)

  const openNotifications = () => setIsActive(overlays.notifications)

  const handleProfileContext = () => {
    profileIsOpen ? setIsActive(overlays.profile) : setIsActive(undefined)
  }

  useEffect(() => {
    handleProfileContext()
  }, [profileIsOpen])

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
        openProfile={openProfile}
      />
      <Suspense fallback={<LoadingSpinner />}>
        <Overlays 
          isActive={isActive}
          closeOverlay={closeOverlay}
        />
      </Suspense>
    </>
  )
}

export default Interface
