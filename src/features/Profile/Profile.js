import { useState, useRef, useEffect } from 'react'
import { overlay } from '../../config'
import { dropdown } from './config'
import useOverlay from '../../hooks/useOverlay'
import useSession from '../../hooks/useSession'
import useProfile from '../../hooks/useProfile'
import useDialog from '../../hooks/useDialog'
import useSwipeFromEdge from '../../hooks/useSwipeFromEdge'
import CloseButton from '../../components/CloseButton/CloseButton'
import Dropdown from '../../components/Dropdown/Dropdown'
import EditButton from './EditButton/EditButton'
import EditForm from './EditForm/EditForm'
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
    picture: '',
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
    openDialog(<EditForm {...profile} />)
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
          {/* move edit button into drop down to be rendered conditionally... how to get state into config */}
          <EditButton open={openEditor} /> 
        </nav>
        <header>
          <div>
            <img src={profile.picture} alt={`${profile.username}'s profile picture`} />
          </div>
          <div>
            <h1 id="username">{profile.username}</h1>
            <address>{profile.location}</address>
            {profile.biography && <p id="biography">{profile.biography}</p>}
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
