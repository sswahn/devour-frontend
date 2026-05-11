import { useState, useRef, useEffect } from 'react'
import { overlay } from '../../config'
import { dropdown } from './config'
import useOverlay from '../../hooks/useOverlay'
import useSession from '../../hooks/useSession'
import useProfile from '../../hooks/useProfile'
import useDialog from '../../../hooks/useDialog'
import useSwipeFromEdge from '../../hooks/useSwipeFromEdge'
import CloseButton from '../../components/CloseButton/CloseButton'
import Dropdown from '../../components/Dropdown/Dropdown'
import ImageField from './ImageField/ImageField'
import TextField from './TextField/TextField'
import FollowButton from './FollowButton/FollowButton'
import FollowStats from './FollowStats/FollowStats'
import styles from './Profile.module.css'

function Profile() {
  const { closeOverlay } = useOverlay()
  const { userProfile } = useProfile() // username of profile to be displayed.
  const { openDialog } = useDialog()
  const { onPointerDown, onPointerMove, onPointerUp, onPointerCancel } = useSwipeFromEdge(closeOverlay)
  const overlayRef = useRef(null)
  const [profile, setProfile] = useState({
    image: '',
    username: 'test_user',
    location: 'new york',
    biography: ''
   })

  const updateProfile = obj => setProfile(prev => ({ ...prev, ...obj }))
  
  const onKeyDown = event => {
    if (event.key === 'Escape') {
      event.preventDefault()
      closeOverlay()
    }
  }

  const openEditor = () => {
    openDialog(<ImageEditor />)
  }
  
  // profileUsername used to render profile
  // session.username used to edit profile

  return (
    <section 
      id={overlay.profile}
      className={styles.profile} 
      ref={overlayRef} 
      onKeyDown={onKeyDown}
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
          <CloseButton overlay={overlay.profile} close={closeOverlay} />
          <Dropdown items={dropdown} />
          <EditImageButton open={openEditor} />
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
          {/* import <Feed /> and use it here */}
        </div>
      </div>
    </section>
  )
}

export default Profile
