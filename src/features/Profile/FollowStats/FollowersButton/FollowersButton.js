import { useState } from 'react'
import styles from './FollowersButton.module.css'

// consider sharing state with FollowersStats to immediately update followersCount (up or down, follow unfollow)

function FollowersButton({ username, count }) {
  const [viewFollowers, setViewFollowers] = useState(false)

  const action = () => {
    navigator.vibrate(50)
    setViewFollowers(prevState => !prevState)

    alert('Followers button fired!')
  }
  
  const onClick = event => {
    action()
  }
  
  const onKeyDown = event => {
    if (event.key === 'Enter') {
      action()
    }
  }
  
  return (
    <button
      className={styles.followersButton}
      onClick={onClick} 
      onKeyDown={onKeyDown}
      type="button"
      aria-label={`view users following ${username}`}
      aria-pressed={viewFollowers}
      aria-controls="profile-feed">
      <strong>{count}</strong> <span>Followers</span>
    </button>
  )
}

export default FollowersButton
