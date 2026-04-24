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

  // create an overlays provider
  // all this goes into it
  // components can pull open overlay and close overlay from it
  // it can use Seperate context providers to avoid rerenders
  // it can use separate hooks to avoid rerenders useOpenOverlay, useCloseOverlay
  // no more prop drilling for overlay controls.
  // all these functions/logic goes away, and into the provider.
  // profile issue then solved as:
  // in avatar openOverlay(id), setProfileUser(username) (not sure where setProileUser comes from...)

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
