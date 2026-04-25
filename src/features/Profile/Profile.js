import { useState, useRef, useEffect } from 'react'
import { overlays } from '../../config'
import useOverlay from '../../hooks/useOverlay'
import useFocusStack from '../../hooks/useFocusStack'
import useFocusTrap from '../../hooks/useFocusTrap'
import useSwipeToClose from '../../hooks/useSwipeToClose'
import useSession from '../../hooks/useSession'
import useProfile from '../../hooks/useProfile'
import useGestures from '../../hooks/useGestures'
import CloseButton from '../../components/CloseButton/CloseButton'
import Dropdown from '../../components/Dropdown/Dropdown'
import FollowButton from './FollowButton/FollowButton'
import FollowStats from './FollowStats/FollowStats'
import EditButton from './EditButton/EditButton'
import styles from './Profile.module.css'

function Profile() {
  const { pop } = useFocusStack()
  const { overlayRef, focusRef } = useFocusTrap()
  const { userProfile } = useProfile() // username of profile to be displayed.
  const { closeOverlay } = useOverlay()
  const ticking = useRef(false)
  const latestDeltaX = useRef(0)
  const {
    onGestureDown,
    onGestureMove,
    onGestureUp,
    onGestureCancel
  } = useGestures()
  const [profile, setProfile] = useState({
    image: '',
    username: '',
    location: '',
    biography: ''
   })

  const action = () => {
    closeOverlay(overlays.profile)
    pop()
  }
  
  const onKeyDown = event => {
    if (event.key === 'Escape') {
      event.preventDefault()
      action()
    }
  }

  const throttleTransition = deltaX => {
    latestDeltaX.current = deltaX
    if (!ticking.current) {
      requestAnimationFrame(() => {
        overlayRef.current.style.transform = `translate3d(${latestDeltaX.current}px 0 0)`
        ticking.current = false
      })
      ticking.current = true
    }
  }

  const onPointerDown = event => {
    onGestureDown(event)
    overlayRef.current.style.transition = 'none' // disable snap back
    overlayRef.current.style.willChange = 'transform'
  }
  
  const onPointerMove = event => {
    const { deltaX, deltaY, edge, direction } = onGestureMove(event)
    const absX = Math.abs(deltaX)
    const absY = Math.abs(deltaY)

    if (!direction) {
      const LOCK_THRESHOLD = 10
      if (absX < LOCK_THRESHOLD && absY < LOCK_THRESHOLD) {
        return
      }
    }
    if (direction === 'y') {
      return
    }
    const raw = edge === 'left' ? Math.max(0, deltaX) : Math.min(0, deltaX)
    const resisted = raw / (1 + Math.abs(raw) / 300)
    overlayRef.current.style.transform = `translateX(${resisted}px)`
    //throttleTransition(resisted)
  }

  const onPointerUp = event => {
    const { deltaX, deltaY, edge } = onGestureUp(event)

    console.log('edge: ', edge)
    console.log('deltaX: ', deltaX)
    
    const CLOSE_THRESHOLD = 150 
    const isCorrectDir = edge === 'left' ? deltaX > 0 : deltaX < 0
    const shouldClose = Math.abs(deltaX) > CLOSE_THRESHOLD && isCorrectDir
    overlayRef.current.style.transition = 'transform 0.2s ease'
    if (shouldClose) {
      navigation.vibrate?.(50)
      overlayRef.current.addEventListener('transitionend', action, { once: true })
      const translation = edge === 'right' ? '100%' : '-100%'
      overlayRef.current.style.transform = `translateX(${translation}%)`
    } else {
      overlayRef.current.style.transform = ''
    }
  }

  const onPointerCancel = event => {
    onGestureCancel(event)
  }
  
  // profileUsername used to render profile
  // session.username used to edit profile

  /*
  const gesture = () => {
    if (overlayRef.current && action) {
      navigator.vibrate?.(50)
      swipeToClose(overlayRef.current, action)
    }
  }
  */

  return (
    <section 
      id={overlays.profile}
      className={styles.profile} 
      ref={focusRef} 
      onKeyDown={onKeyDown}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerCancel}
      tabIndex={-1} 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="username" 
      aria-describedby="biography">
      <nav>
        <CloseButton overlay={overlays.profile} close={closeOverlay} pop={pop} />
        <Dropdown items={[
          { text: 'alert message', method: () => alert('dropdown item clicked.') },
          { text: 'console log message', method: () => console.log('dropdown item clicked.') }
        ]} />
      </nav>
      <header>
        <div>
          <img src={profile.image} alt={`${profile.username}'s profile picture`} />
          {<EditButton field="profile" />}
        </div>
        <div>
          <div>
            <h1 id="username">{profile.username}</h1>
            {<EditButton field="username" />}
          </div>
          <div>
            <address>{profile.location}</address>
            {<EditButton field="location" />}
          </div>
          {/* 
          <div>
            <p id="biography">Some biographical information about Username.</p>
            {<EditButton info="biography" current={profile.biography} />
          </div>   
          */}
        </div>
      </header>
  
      <FollowButton />
      <FollowStats />
        
      <div id="profile-feed" role="feed">
        {/* feed role="feed" must have article elements as children */}
      </div>

    </section>
  )
}

export default Profile
