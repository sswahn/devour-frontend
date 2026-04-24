import { useState, useRef } from 'react'
import { overlay } from '../../config'
import useProfile from '../../hooks/useProfile'
import useOverlay from '../../hooks/useOverlay'
import useFocusStack from '../../hooks/useFocusStack'
import Identicon from '../Identicon/Identicon'
import styles from './Avatar.module.css'

function Avatar({ username, image, size = 24 }) {
  const { openOverlay } = useOverlay()
  const { setUserProfile } = useProfile()
  const { push } = useFocusStack()
  const avatarRef = useRef(null)
  
  const action = () => {
    push(avatarRef.current)
    setUserProfile(username)
    openOverlay(overlay.profile)
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
  
  return (
    <button className={styles.avatar} ref={avatarRef} onClick={onClick} onKeyDown={onKeyDown} type="button" aria-label={`${username}'s avatar`}>
      {image 
        ? <img src={image} alt={`${username}'s avatar`} loading="lazy" width={size} height={size} />
        : <Identicon seed={username} />
      }
    </button>
  )
}

export default Avatar
