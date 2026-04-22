import { useEffect, useRef } from 'react'
import useScrollEffect from '../../hooks/useScrollEffect'
import HomeButton from './HomeButton/HomeButton'
import SearchButton from './SearchButton/SearchButton'
import CameraButton from './CameraButton/CameraButton'
import NotificationsButton from './NotificationsButton/NotificationsButton'
import ProfileButton from './ProfileButton/ProfileButton'
import styles from './MobileNav.module.css'

function MobileNav({ 
  openSearch,
  openCamera, 
  openNotifications, 
  openProfile 
}) {
  const navRef = useRef(null)
  const { scrollEffect } = useScrollEffect()

  useEffect(() => {
    navRef && scrollEffect(navRef.current, styles.hidden)
  }, [])
  
  return (
    <nav ref={navRef} className={styles.navigation} aria-label="primary navigation">
      <div>
        <HomeButton />  
        <SearchButton openSearch={openSearch} />
        <CameraButton openCamera={openCamera} />
        <NotificationsButton openNotifications={openNotifications} />
        <ProfileButton openProfile={openProfile} />
      </div>
    </nav>
  )
}

export default MobileNav
