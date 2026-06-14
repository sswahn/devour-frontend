import { useState, useRef, useEffect } from 'react'
import { overlay } from '../../config'
import server from '../../utilities/server'
import useOverlay from '../../hooks/useOverlay'
import useProfile from '../../hooks/useProfile'
import useSwipeFromEdge from '../../hooks/useSwipeFromEdge'
import TopNav from './TopNav/TopNav'
import FollowButton from './FollowButton/FollowButton'
import FollowStats from './FollowStats/FollowStats'
import Feed from '../Feed/Feed'
import styles from './Profile.module.css'

function Profile() {
  const { closeOverlay } = useOverlay()
  const { userProfile } = useProfile() // username of profile to be displayed.
  const { onPointerDown, onPointerMove, onPointerUp, onPointerCancel } = useSwipeFromEdge(closeOverlay)
  const overlayRef = useRef(null)
  const [profile, setProfile] = useState({
    picture: '', // if set optimistically, needs URL.createObjectURL(blob/file)
    username: 'test_user',
    location: 'new york',
    biography: ''
   })
  const [feedData, setFeedData] = useState([
    { picture: '', username: 'test_user1', video: 1, caption: 'test caption 1' },
    { picture: '', username: 'test_user2',  video: 2, caption: 'testing captions with multiple lines. It should expand upward instead of downward.' },
    { picture: '', username: 'test_user3', video: 3, caption: 'test captions 3' }
  ])

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
    <section id={overlay.profile} className={styles.profile} ref={overlayRef} onKeyDown={onKeyDown} role="dialog" aria-modal="true">
      <div onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} onPointerCancel={onPointerCancel}>
        <div>
          <TopNav profile={profile} setProfile={setProfile} />
          <header>
            <img src={profile.picture} alt={`${profile.username}'s profile picture`} />
            <h1 id="username">{profile.username}</h1>
            <address>{profile.location}</address>
            {profile.biography && <p id="biography">{profile.biography}</p>}
          </header>
    
          <FollowButton />
          <FollowStats />
        </div>
        <Feed data={feedData} setData={setFeedData} />
      </div>
    </section>
  )
}

export default Profile
