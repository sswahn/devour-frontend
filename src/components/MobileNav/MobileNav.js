import { useEffect, useRef } from 'react'
import useFullscreen from '../../hooks/useFullscreen'
import useScrollEffect from '../../hooks/useScrollEffect'
import HomeButton from './HomeButton/HomeButton'
import SearchButton from './SearchButton/SearchButton'
import CreateButton from './CreateButton/CreateButton'
import NotificationsButton from './NotificationsButton/NotificationsButton'
import ProfileButton from './ProfileButton/ProfileButton'
import styles from './MobileNav.module.css'

function MobileNav() {
  const { isFullscreen } = useFullscreen()
  const { scrollEffect } = useScrollEffect()
  const navRef = useRef(null)

  useEffect(() => {
    if (!isFullscreen) {
     // navRef.current && scrollEffect(navRef.current, styles.hidden)
    }
  }, [])
  
  return (
    <nav ref={navRef} className={styles.navigation} aria-label="primary navigation">
      <div>
        <HomeButton />  
        <SearchButton />
        <CreateButton />
        <NotificationsButton />
        <ProfileButton />
      </div>
    </nav>
  )
}

export default MobileNav
