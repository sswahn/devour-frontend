import { useState, useRef, useEffect } from 'react'
import { overlay } from '../../config'
import server from '../../utilities/server'
import useOverlay from '../../hooks/useOverlay'
import useProfile from '../../hooks/useProfile'
import useSwipeFromEdge from '../../hooks/useSwipeFromEdge'
import TopNav from './TopNav/TopNav'
import FollowButton from './FollowButton/FollowButton'
import FollowStats from './FollowStats/FollowStats'
import styles from './Profile.module.css'

function Profile() {
  const { closeOverlay } = useOverlay()
  const { userProfile } = useProfile() // username of profile to be displayed.
  const { onPointerDown, onPointerMove, onPointerUp, onPointerCancel } = useSwipeFromEdge(closeOverlay)
  const overlayRef = useRef(null)
  const [profile, setProfile] = useState({
    picture: '',
    username: 'test_user',
    location: 'new york',
    biography: ''
   })

  const updateProfile = obj => {
    setProfile(prev => ({ ...prev, ...obj }))
  }
  
  const onKeyDown = event => {
    if (event.key === 'Escape') {
      event.preventDefault()
      closeOverlay()
    }
  }  

  const loadData = () => {
    // userProfile used to request profile data
    // setProfile(response.data)
  }

  useEffect(() => {
    // loadData()
  }, [])

  return (
    <section 
      id={overlay.profile}
      className={styles.profile} 
      ref={overlayRef} 
      onKeyDown={onKeyDown}
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="username" 
      aria-describedby={profile.biography ? 'biography' : undefined}>
      <div
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}>
        <TopNav profile={profile} />
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
