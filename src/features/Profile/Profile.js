import { useState, useRef, useEffect } from 'react'
import { overlays } from '../../config'
import useOverlay from '../../hooks/useOverlay'
import useFocusStack from '../../hooks/useFocusStack'
import useFocusTrap from '../../hooks/useFocusTrap'
import useSwipeToClose from '../../hooks/useSwipeToClose'
import useSession from '../../hooks/useSession'
import useProfile from '../../hooks/useProfile'
import CloseButton from '../../components/CloseButton/CloseButton'
import Dropdown from '../../components/Dropdown/Dropdown'
import FollowButton from './FollowButton/FollowButton'
import FollowStats from './FollowStats/FollowStats'
import EditButton from './EditButton/EditButton'
import styles from './Profile.module.css'

import useGestures from '../../hooks/useGestures'

// move to features

function Profile() {
  const { pop } = useFocusStack()
  const { overlayRef, focusRef } = useFocusTrap()
  const { userProfile } = useProfile() // username of profile to be displayed.
  const { closeOverlay } = useOverlay()
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

  const onPointerDown = event => {
    onGestureDown(event)
  }
  
  const onPointerMove = event => {
    const {deltaX, deltaY, edge, direction } = onGestureMove(event)
    if (direction === 'y') {
      return
    }
    const raw = edge === 'left' ? Math.max(0, deltaX) : Math.min(0, deltaX)
    const resisted = raw / (1 + Math.abs(raw) / 300)
    event.currentTarget.style.transform = `translateX(${resisted}px)`
  }
  
  const onPointerUp = event => {
    const { deltaX, deltaY, edge } = onGestureUp(event)
    const CLOSE_THRESHOLD = 150 

    const isCorrectDir = edge === 'left' ? deltaX > 0 : deltaX < 0
    const shouldClose = Math.abs(deltaX) > CLOSE_THRESHOLD && isCorrectDir
    
    if (shouldClose) {
      action()
    } else {
      event.currentTarget.style.transition = 'transform 0.2s ease'
      event.currentTarget.style.transform = ''
    }
  }
  
  const onPointerCancel = event => {
    onGestureCancel(event)
  }
  
  // IF every overlay must import closeOverlay for closing on Escape key
  // then might as well pass it to the close button, instead of importing inside button.

  
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
