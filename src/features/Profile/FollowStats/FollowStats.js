import { useState, useEffect } from 'react'
import FollowingButton from './FollowingButton/FollowingButton'
import FollowersButton from './FollowersButton/FollowersButton'
import styles from './FollowStats.module.css'

function FollowStats() {
  const [followingCount, setFollowingCount] = useState(600)
  const [followersCount, setFollowersCount] = useState(50)

  const liveUpdateFollowing = () => {
    const response = followingCount + 1
    setFollowingCount(response)
  }

  const liveUpdateFollowers = () => {
    const response = followersCount + 1
    setFollowersCount(response)
  }
  
  // get live websocket updates on counts
  
  return (
    <ul className={styles.followStats}>
      <li>
        <FollowingButton username={'username'} count={followingCount} />
      </li>
      <li>
        <FollowersButton username={'username'} count={followersCount} />
      </li>
    </ul>
  )
}

export default FollowStats
