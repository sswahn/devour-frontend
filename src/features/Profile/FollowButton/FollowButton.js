import { useState } from 'react'
import PlusIcon from '../../../components/Icons/PlusIcon/PlusIcon'
import MinusIcon from '../../../components/Icons/MinusIcon/MinusIcon'
import styles from './FollowButton.module.css'

function FollowButton() {
  const [following, setFollowing] = useState(false)
  
  const onClick = event => {
    navigator.vibrate?.(50)
    setFollowing(prevState => !prevState)
  }
  
  return (
    <button 
      className={styles.followButton} 
      onClick={onClick}
      type="button" 
      aria-label={`{${following ? 'unfollow' : 'follow'}`} 
      aria-pressed={following}>
      {following ? <><MinusIcon /> Unfollow</> : <><PlusIcon /> Follow</>}
    </button>
  )
}

export default FollowButton
