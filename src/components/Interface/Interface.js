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

  const openOverlay = id => setIsActive(id)
  
  const closeOverlay = () => setIsActive(undefined)

  const setProfileActive = () => {
    profileIsOpen ? setIsActive(overlays.profile) : setIsActive(undefined)
  }

  useEffect(() => {
    setProfileActive()
  }, [profileIsOpen])

  return (
    <>
      <Header openOverlay={openOverlay} />
      <Main />
      <MobileNav openOverlay={openOverlay} />
      <Suspense fallback={<LoadingSpinner />}>
        <Overlays isActive={isActive} closeOverlay={closeOverlay} />
      </Suspense>
    </>
  )
}

export default Interface
