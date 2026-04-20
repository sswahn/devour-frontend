import { useEffect, useRef  } from 'react'
import useScrollEffect from '../../hooks/useScrollEffect'
import useSession from '../../hooks/useSession'
import HomeIcon from '../Icons/HomeIcon/HomeIcon'
import DashboardButton from './DashboardButton/DashboardButton'
import LoginButton from './LoginButton/LoginButton'
import styles from './Header.module.css'

import Avatar from '../Avatar/Avatar'

const Header = ({ authenticationButtonRef, openAuthentication }) => {
  const { session } = useSession()
  const headerRef = useRef(null)
  const { scrollEffect } = useScrollEffect()

  useEffect(() => {
    headerRef && scrollEffect(headerRef.current, styles.hidden)
  }, [])

  return (
    <header ref={headerRef} className={styles.header}>
      <div>
        <button onClick={() => navigator.vibrate(50)} type="button" aria-label="home">
          <HomeIcon />
        </button>
        
  {/* <Avatar username={Math.random().toString(36)} /> */}
        
        <nav>
        {/* Needs desktop navigation in header (basically the mobile nav buttons, no camera, and a download option. */}
        {session.isAuthenticated && (
          <DashboardButton />
        )}
        {session.isAuthenticated 
          ? <Avatar username={session.username} image={null} />
          : <LoginButton 
              authenticationButtonRef={authenticationButtonRef} 
              openAuthentication={openAuthentication} />
        }
        </nav>
      </div>
    </header>
  )
}

export default Header
