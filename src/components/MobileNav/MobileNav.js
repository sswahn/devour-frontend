import { useEffect, useRef } from 'react'
import useScrollEffect from '../../hooks/useScrollEffect'
import HomeButton from './HomeButton/HomeButton'
import SearchButton from './SearchButton/SearchButton'
import CameraButton from './CameraButton/CameraButton'
import NotificationsButton from './NotificationsButton/NotificationsButton'
import ProfileButton from './ProfileButton/ProfileButton'
import styles from './MobileNav.module.css'

function MobileNav() {
  const { scrollEffect } = useScrollEffect()
  const navRef = useRef(null)

  useEffect(() => {
    navRef && scrollEffect(navRef.current, styles.hidden)
  }, [])
  
  return (
    <nav ref={navRef} className={styles.navigation} aria-label="primary navigation">
      <div>
        <HomeButton />  
        <SearchButton />
        <CameraButton />
        <NotificationsButton />
        <ProfileButton />
      </div>
    </nav>
  )
}

export default MobileNav
