import { useState } from 'react'
import PlusIcon from '../../Icons/PlusIcon/PlusIcon'
import MinusIcon from '../../Icons/MinusIcon/MinusIcon'
import styles from './FollowButton.module.css'

function FollowButton() {
  const [following, setFollowing] = useState(false)

  const action = () => {
    navigator.vibrate(50)
    setFollowing(prevState => !prevState)
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
      className={styles.followButton} 
      onClick={onClick}
      onKeyDown={onKeyDown}
      type="button" 
      aria-label={`{${following ? 'unfollow' : 'follow'}`} 
      aria-pressed={following}>
      {following ? <><MinusIcon /> Unfollow</> : <><PlusIcon /> Follow</>}
    </button>
  )
}

export default FollowButton
