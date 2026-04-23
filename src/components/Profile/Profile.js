import { useRef, useEffect } from 'react'
import useFocusStack from '../../hooks/useFocusStack'
import useFocusTrap from '../../hooks/useFocusTrap'
import useGesture from '../../hooks/useGesture'
import useSwipeToClose from '../../hooks/useSwipeToClose'
import useSession from '../../hooks/useSession'
import useProfile from '../../hooks/useProfile'
import CloseButton from '../CloseButton/CloseButton'
import Dropdown from '../Dropdown/Dropdown'
import FollowButton from './FollowButton/FollowButton'
import FollowStats from './FollowStats/FollowStats'
import EditButton from './EditButton/EditButton'
import styles from './Profile.module.css'

// move to features

function Profile({ closeProfile }) {
  const { pop } = useFocusStack()
  const { overlayRef, focusRef } = useFocusTrap()
  const { edgeSwipe, handlers } = useGesture()
  const { profileUsername } = useProfile() 

  // profileUsername used to render profile
  // session.username used to edit profile

  const swipeToClose = useSwipeToClose()

  const action = () => {
    closeProfile()
    pop()
  }

  /*
  const gesture = () => {
    if (overlayRef.current && action) {
      navigator.vibrate?.(50)
      swipeToClose(overlayRef.current, action)
    }
  }
  */

  const onKeyDown = event => {
    if (event.key === 'Escape') {
      event.preventDefault()
      action()
    }
  }

  /*
  useEffect(() => {
    gesture()
  }, [])
  */

  useEffect(() => {
    if (overlayRef.current && !edgeSwipe.shouldClose) {
      overlayRef.current.style.transform = `translateX(${edgeSwipe.delta}px)`
    }
  }, [edgeSwipe.delta])

  useEffect(() => {
    const element = overlayRef.current
    if (edgeSwipe.shouldClose) {
      console.log('close overlay.')
      element.style.transform = `translateX(${element.offsetWidth}px)`
      action() // wait for transition.
    } else {
      console.log('snap back overlay.')
      element.style.transform = ''
    }
  }, [edgeSwipe.shouldClose])

  return (
    <section 
      id="profile"
      className={styles.profile} 
      ref={focusRef} 

      {...handlers}

      onKeyDown={onKeyDown}
      tabIndex={-1} 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="username" 
      aria-describedby="biography">
      <nav>
        <CloseButton overlay="profile" close={closeProfile} />
        <Dropdown items={[
          { text: 'alert message', method: () => alert('dropdown item clicked.') },
          { text: 'console log message', method: () => console.log('dropdown item clicked.') }
        ]} />
      </nav>
      <header>
        <div>
          <img src={profile.image} alt={`${profile.username}'s profile picture`} />
          {<EditButton info="profile" current={profile.image} />}
        </div>
        <div>
          <div>
            <h1 id="username">{profile.username}</h1>
            {<EditButton info="username" current={profile.username} />}
          </div>
          <div>
            <address>New York, NY</address>
            {<EditButton info="location" current={profile.location} />}
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
