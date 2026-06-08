import { useState, useRef, useEffect } from 'react'
import { overlays } from '../../config'
import useOverlay from '../../hooks/useOverlay'
import useFocusTrap from '../../hooks/useFocusTrap'
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
    closeOverlay()
  }
  
  const onKeyDown = event => {
    if (event.key === 'Escape') {
      event.preventDefault()
      action()
    }
  }

  const throttleTransition = (deltaX, currentTarget) => {
    latestDeltaX.current = deltaX
    if (!ticking.current) {
      ticking.current = true
      requestAnimationFrame(() => {
        currentTarget.style.transform = `translate3d(${latestDeltaX.current}px, 0, 0)`
        ticking.current = false
      })
    }
  }

  const onPointerDown = event => {
    onGestureDown(event)
    overlayRef.current.style.transition = 'none' // disable snap back
    overlayRef.current.style.willChange = 'transform'
  }
  
  const onPointerMove = event => {
    const { currentTarget } = event
    const { deltaX, edge, direction } = onGestureMove(event)
    if (direction === 'y') {
      return
    }
    const raw = edge === 'left' ? Math.max(0, deltaX) : Math.min(0, deltaX)
    const resisted = raw / (1 + Math.abs(raw) / 300)
    
    // currentTarget.style.transform = `translateX(${resisted}px)`
    throttleTransition(resisted, currentTarget)
  }

  // calculate velocity in hook and return with result object
  
  const onPointerUp = event => {
    const { currentTarget } = event
    const { deltaX, edge, velocity, timestamp } = onGestureUp(event)
  
    // 1. Kill the move throttle immediately
    ticking.current = false
  
    const raw = edge === 'left' ? Math.max(0, deltaX) : Math.min(0, deltaX)
    const resisted = raw / (1 + Math.abs(raw) / 300)
    const shouldClose = Math.abs(resisted) >= 150
  
    // 2. State Prep: Switch transition ON
    currentTarget.style.transition = 'transform 0.25s cubic-bezier(0.2, 0, 0, 1)'

    
    const timeSinceLastMove = performance.now() - timestamp
  
    // 1. If they held their finger still for > 100ms, it's not a flick
    const finalVelocity = timeSinceLastMove > 100 ? 0 : velocity
  
    // 2. Define your threshold (0.5 to 1.0 is usually a good "flick" feel)
    const FLICK_THRESHOLD = 0.5
  
    if (Math.abs(finalVelocity) > FLICK_THRESHOLD) {
      console.log("Flick detected with velocity:", finalVelocity)
      // Trigger your "flick" animation here
      // flickClose()
    } else {
      console.log("Regular release or snap-back")
      //regularClose()
    }
    
  
    // 3. The "Double rAF" — Guarantees transition starts without layout thrashing
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (shouldClose) {
          navigation.vibrate?.(50)
          const translation = edge === 'left' ? '100vw' : '-100vw'
          
          currentTarget.style.transform = `translate3d(${translation}, 0, 0)`
          currentTarget.addEventListener('transitionend', action, { once: true })
        } else {
          currentTarget.style.transform = 'translate3d(0, 0, 0)'
          
          // Cleanup transition when snap-back finishes
          currentTarget.addEventListener('transitionend', () => {
            currentTarget.style.transition = ''
          }, { once: true })
        }
      })
    })
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
      tabIndex={-1} 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="username" 
      aria-describedby="biography">
      <div
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}>
        <nav>
          <CloseButton overlay={overlays.profile} close={action} />
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
      </div>
    </section>
  )
}

export default Profile
