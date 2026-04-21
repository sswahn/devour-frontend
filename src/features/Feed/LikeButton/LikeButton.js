import { useState, useEffect } from 'react'
import { config } from '../../../config'
import server from '../../../utilities/server'
import HeartIconFill from '../../../components/Icons/HeartIcon/HeartIconFill' 
import HeartIconStroke from '../../../components/Icons/HeartIcon/HeartIconStroke' 
import styles from './LikeButton.module.css'

function LikeButton({ doubleTap, likedByUser = false }) {
  const [liked, setLiked] = useState(false)
  const [loading, setLoading] = useState(false)

  const init = () => {
    setLiked(likedByUser)
  }
  
  const action = async () => {
    setLiked(prev => !prev)
    // dounce request to update stored like state
    
  }

  const gesture = () => {
    if (!liked) {
      navigator.vibrate?.(50)
      action()
    }
  }

  const onClick = event => {
    navigator.vibrate?.(50)
    action()
  }

  const onKeyDown = event => {
    if (event.key === 'Enter') {
      event.preventDefault()
      action()
    }
  }

  useEffect(() => {
    gesture()
  }, [doubleTap])

  useEffect(() => {
    init() 
  }, [likedByUser])
  
  return (
    <button className={styles.likeButton} onClick={onClick} onKeyDown={onKeyDown} disabled={loading} type="button" aria-label="like this" aria-pressed={liked}>
      {liked ? <HeartIconFill /> : <HeartIconStroke />}
    </button>
  )
}

export default LikeButton
