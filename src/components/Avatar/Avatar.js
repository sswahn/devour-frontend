import { useState, useRef } from 'react'
import useProfile from '../../hooks/useProfile'
import useFocusStack from '../../hooks/useFocusStack'
import Identicon from '../Identicon/Identicon'
import styles from './Avatar.module.css'

const Avatar = ({ username, image, size = 24 }) => {
  const { setProfile } = useProfile()
  const { push } = useFocusStack()
  const avatarRef = useRef(null)
  
  const action = () => {
    push(avatarRef.current)
    setProfile(username)
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
