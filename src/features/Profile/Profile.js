import { useState, useRef, useEffect } from 'react'
import { overlays } from '../../config'
import useOverlay from '../../hooks/useOverlay'
import useFocusTrap from '../../hooks/useFocusTrap'
import useSession from '../../hooks/useSession'
import useProfile from '../../hooks/useProfile'
import useSwipeFromEdge from '../../hooks/useSwipeFromEdge'
import CloseButton from '../../components/CloseButton/CloseButton'
import Dropdown from '../../components/Dropdown/Dropdown'
import ImageField from './ImageField/ImageField'
import TextField from './TextField/TextField'
import FollowButton from './FollowButton/FollowButton'
import FollowStats from './FollowStats/FollowStats'
import EditButton from './EditButton/EditButton'
import styles from './Profile.module.css'

function Profile() {
  const { overlayRef, focusRef } = useFocusTrap()
  const { userProfile } = useProfile() // username of profile to be displayed.
  const { closeOverlay } = useOverlay()
  const { onPointerDown, onPointerMove, onPointerUp, onPointerCancel } = useSwipeFromEdge(closeOverlay)
  
  const [profile, setProfile] = useState({
    image: '',
    username: 'test_user',
    location: 'new york',
    biography: ''
   })

  const updateProfile = property => setProfile(prev => {...prev, ...property })

  const action = () => {
    closeOverlay()
  }
  
  const onKeyDown = event => {
    if (event.key === 'Escape') {
      event.preventDefault()
      action()
    }
  }
  
  // profileUsername used to render profile
  // session.username used to edit profile

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
            <ImageField src={profile.image} alt={`${profile.username}'s profile picture`} />
          </div>
          <div>
            <h1 id="username">
              <TextField type="username" text={profile.username} update={updateProfile} />
            </h1>
            <address>
              <TextField type="location" text={profile.location} update={updateProfile} />
            </address>
            
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
