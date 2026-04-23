import { useContext, useState, useEffect, useRef } from 'react'
import { Context } from '../../Provider'
import { config } from '../../config'
import { Search } from '@sswahn/components'
import Avatar from '../Avatar/Avatar'
import { navigateTo } from '@sswahn/router'
import server from '@sswahn/server'
import storage from '@sswahn/storage'
import database from '@sswahn/database'
import Camera from '../Camera/Camera'
import XmarkIcon from '../Icons/XmarkIcon/XmarkIcon'
import SearchIcon from '../Icons/SearchIcon/SearchIcon'
import CameraIcon from '../Icons/CameraIcon/CameraIcon'
import BellIcon from '../Icons/BellIcon/BellIcon'
import UserPlusIcon from '../Icons/UserPlusIcon/UserPlusIcon'
import RightFromBracketIcon from '../Icons/RightFromBracketIcon/RightFromBracketIcon'
import RightToBracketIcon from '../Icons/RightToBracketIcon/RightToBracketIcon'
import styles from './sidebar.module.css'

const Sidebar = () => {
  const [context, dispatch] = useContext(Context)
  const [isOpen, setIsOpen] = useState()
  const sidebarRef = useRef(null)
  const db = database()
  
  const handleSidebar = event => {
    dispatch({ type: 'sidebar', payload: false })
  }
  
  const handleSearch = value => {
    // filter through data for items related to value
  }
  
  const handleOpenProfile = () => {
    //dispatch({ type: 'sidebar', payload: false })
    navigateTo(`/devour-clone/profile/${context.user.username}`)
  }
  
  const handleOpenCamera = async event => {
    try {
      
      console.error('Requesting fullscreen.')
      await document.documentElement.requestFullscreen()
      await screen.orientation.lock('portrait')
      console.log('Locked to portrait.')
      
    } catch (error) {
      console.error('Fullscreen failed:', error)
    } finally {
      dispatch({ type: 'sidebar', payload: false })
      dispatch({ type: 'camera', payload: true })
    }
  }
  
  const handleNotifications = event => {
    
  }
  
  const handleSignout = async () => {
    try {
      const request = {
        session: false
      }
      server.post(config.api.user.logout, request)
      dispatch({ type: 'session', payload: false })
      db.destroy()
      storage.local.remove(config.store.posts.create)
    } catch (error) {
      console.error('Network error, check connection.') // use errorHandler
    }
  }

  const handleSignin = event => {
    dispatch({ type: 'sidebar', payload: false })
    dispatch({ type: 'auth', payload: 'login' })
  }
  
  const handleSignup = event => {
    dispatch({ type: 'sidebar', payload: false })
    dispatch({ type: 'auth', payload: 'register' })
  }

  const openSidebar = () => {
    setIsOpen(true)
  }

  const closeSidebar = () => {
    dispatch({ type: 'sidebar', payload: false })
    setIsOpen(false)
  }
  
  const toggleSidebar = () => {
    context.sidebar ? openSidebar() : closeSidebar()
  }

  const clickToClose = event => {
    if (!sidebarRef.current.contains(event.target)) {
      closeSidebar()
    }
  }
 
  useEffect(() => {
    
    console.log('this is the correct sidebar component')
    
    toggleSidebar()
  }, [context.sidebar])

  useEffect(() => {
    document.addEventListener('mousedown', clickToClose)
    return () => {
      document.removeEventListener('mousedown', clickToClose)
    }
  }, [])
  
  return (
    <>
      <nav className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : styles.sidebarClose}`} ref={sidebarRef} aria-label="sidebar" aria-hidden={!isOpen}>
        <div className="sidebar-header">
  
         {/* consolidate this to one class for search button */}
  
          <button className={`${styles.sidebarButton} ${styles.searchButton}`} type="button" aria-label="open search">
            <SearchIcon />
            <div className="tooltip" role="tooltip">Search</div>
          </button>
    
          {/* <Search className={styles.searchInput} placeholder="Search" onChange={handleSearch} /> */}
    
          <button className={styles.sidebarButton} onClick={handleSidebar} type="button" aria-label="open menu" aria-controls="sidebar" aria-expanded={context.sidebar}>
            <XmarkIcon />
            <div className="tooltip" role="tooltip">Menu</div>
          </button>
        </div>
        {!context.session ? (
          <div className={styles.sidebarButtonContainer}>
            <button className={styles.sidebarNavigation} onClick={handleOpenProfile} type="button" aria-label="open profile">
              <Avatar className={styles.sidebarAvatar} image={context.user.avatar} username={context.user.username} onClick={() => {}} size="18px" />
              <span className="sidebar-user">{context.user.username}</span>
            </button>
            <button className={styles.sidebarNavigation} onClick={handleOpenCamera} type="button" aria-label="open camera" aria-haspopup="dialog">
              <CameraIcon />
              <span>Camera</span>
            </button>
            <button className={styles.sidebarNavigation} onClick={handleNotifications} type="button" aria-label="open notifications" aria-haspopup="dialog"> 
              <BellIcon />
              <div className={styles.notificationsBadge} role="status" aria-label="notification indicator" aria-hidden="false"></div>
              <span>Notifications</span>
            </button>
            <button className={styles.sidebarNavigation} onClick={handleSignout} type="button" aria-label="sign out" aria-description="Click here to end your session.">
              <RightFromBracketIcon />
              <span>Sign Out</span>
            </button>
          </div>
        ) : (
          <div className={styles.sidebarButtonContainer}>
            <button className={styles.sidebarNavigation} onClick={handleSignin} type="button" aria-label="sign out" aria-description="Click here to sign in with your username and password." aria-haspopup="dialog">
              <RightToBracketIcon />
              <span>Sign In</span>
            </button>
            <button className={styles.sidebarNavigation} onClick={handleSignup} type="button" aria-label="sign up" aria-description="Register a user account." aria-haspopup="dialog">
              <UserPlusIcon />
              <span>Sign Up</span>
            </button>
          </div>
        )}
      </nav>
      <div className={`${styles.sidebarOverlay} ${isOpen ? styles.sidebarOpenOverlay : styles.sidebarCloseOverlay}`} onClick={closeSidebar} aria-label="sidebar overlay" aria-hidden={!isOpen}></div>
    </>
  )
}

export default Sidebar
