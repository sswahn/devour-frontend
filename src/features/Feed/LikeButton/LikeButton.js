import { useState, useEffect } from 'react'
import { config } from '../../../config'
import server from '../../../utilities/server'
import HeartIconFill from '../../../components/Icons/HeartIcon/HeartIconFill' 
import HeartIconStroke from '../../../components/Icons/HeartIcon/HeartIconStroke' 
import styles from './LikeButton.module.css'

function LikeButton({ likedByUser }) {
  const [liked, setLiked] = useState(false)
  const [loading, setLoading] = useState(false)

  const action = async () => {
    navigator.vibrate(50)
    setLiked(prevState => !prevState)
    return
    
    setLoading(true)
    const request = {}
    const response = await server.post(config.post.like)
    
    setLiked(prevState => !prevState)
    setLoading(false)
  }

  const onClick = event => {
    action()
  }

  const onKeyDown = event => {
    if (event.key === 'Enter') {
      event.preventDefault()
      action()
    }
  }

  useEffect(() => {
    setLiked(likedByUser) 
  }, [likedByUser])
  
  return (
    <button className={styles.likeButton} onClick={onClick} onKeyDown={onKeyDown} disabled={loading} type="button" aria-label="like this" aria-pressed={liked}>
      {liked ? <HeartIconFill /> : <HeartIconStroke />}
    </button>
  )
}

export default LikeButton
