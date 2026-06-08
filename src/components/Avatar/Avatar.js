import { useState, useRef } from 'react'
import { overlay } from '../../config'
import useProfile from '../../hooks/useProfile'
import useOverlay from '../../hooks/useOverlay'
import Identicon from '../Identicon/Identicon'
import styles from './Avatar.module.css'

function Avatar({ username, image, size = 24 }) {
  const { openOverlay } = useOverlay()
  const { setUserProfile } = useProfile()
  const avatarRef = useRef(null)
  
  const onClick = event => {
    navigator.vibrate?.(50)
    setUserProfile(username)
    openOverlay(overlay.profile, avatarRef.current)
  }
  
  return (
    <button className={styles.avatar} ref={avatarRef} onClick={onClick} type="button" aria-label={`${username}'s avatar`}>
      {image 
        ? <img src={image} alt={`${username}'s avatar`} loading="lazy" width={size} height={size} />
        : <Identicon seed={username} />
      }
    </button>
  )
}

export default Avatar
