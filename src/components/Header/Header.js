import { useEffect, useRef  } from 'react'
import useScrollEffect from '../../hooks/useScrollEffect'
import useSession from '../../hooks/useSession'
import HomeIcon from '../Icons/HomeIcon/HomeIcon'
import DashboardButton from './DashboardButton/DashboardButton'
import LoginButton from './LoginButton/LoginButton'
import styles from './Header.module.css'

import Avatar from '../Avatar/Avatar'

const Header = ({ openAuthentication, openDashboard }) => {
  const { session } = useSession()
  const { scrollEffect } = useScrollEffect()
  const headerRef = useRef(null)

  useEffect(() => {
    headerRef.current && scrollEffect(headerRef.current, styles.hidden)
  }, [])

  return (
    <header ref={headerRef} className={styles.header}>
      <div>
        <button onClick={() => navigator.vibrate(50)} type="button" aria-label="home">
          <HomeIcon />
        </button>
        
        <nav>
        {/* Needs desktop navigation in header (basically the mobile nav buttons, no camera, and a download option. */}
        {/*session.isAuthenticated && ( // && session.isProUser &&
          <DashboardButton openDashboard={openDashboard} />
        )*/}
        {/* login button should be replaced with another button, perhaps sidebar or dropdown */}
        {session.isAuthenticated && <LoginButton openAuthentication={openAuthentication} />}
        </nav>
      </div>
    </header>
  )
}

export default Header
