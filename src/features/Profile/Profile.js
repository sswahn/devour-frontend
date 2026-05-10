import { useState, useRef, useEffect } from 'react'
import { overlay } from '../../config'
import useOverlay from '../../hooks/useOverlay'
import useSession from '../../hooks/useSession'
import useProfile from '../../hooks/useProfile'
import useSwipeFromEdge from '../../hooks/useSwipeFromEdge'
import FlagIcon from '../../components/Icons/FlagIcon/FlagIcon'
import UserXmarkIcon from '../../components/Icons/UserXmarkIcon/UserXmarkIcon'
import CloseButton from '../../components/CloseButton/CloseButton'
import Dropdown from '../../components/Dropdown/Dropdown'
import ImageField from './ImageField/ImageField'
import TextField from './TextField/TextField'
import FollowButton from './FollowButton/FollowButton'
import FollowStats from './FollowStats/FollowStats'
import EditButton from './EditButton/EditButton'
import styles from './Profile.module.css'

function Profile() {
  const { closeOverlay } = useOverlay()
  const { userProfile } = useProfile() // username of profile to be displayed.
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
  
  // profileUsername used to render profile
  // session.username used to edit profile

  return (
    <section 
      id={overlay.profile}
      className={styles.profile} 
      ref={overlayRef} 
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
          <CloseButton overlay={overlay.profile} close={closeOverlay} />
          <Dropdown items={[
            { icon: <FlagIcon />, text: 'Flag profile', method: () => alert('Profile reported.') },
            { icon: <UserXmarkIcon />, text: 'Block user', method: () => alert('User blocked.') }
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
