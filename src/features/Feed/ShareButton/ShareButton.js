import { useRef, useEffect } from 'react'
import ShareIcon from '../../../components/Icons/ShareIcon/ShareIcon'
import styles from './ShareButton.module.css'

function ShareButton({ longPress }) {
  const prevLongPress = useRef(null)

  const action = async () => {
    try {
      // check navigator.canShare(file) to verify file sharing support 
      await navigator.share({
        title: 'Check this out!',
        text: 'I found this video.',
        url: 'https://sswahn.github.io/devour-frontend',
        files: [
          //new File([blob], 'snapshot.png', { type: 'image/png' })
        ]
      })
    } catch (error) {
      if (error.name !== 'AbortError') { // AbortError: user canceled share, promise aborted, do nothing.
        throw error 
      }
    }
  }

  const gesture = () => {
    if (longPress) {
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
    if (prevLongPress.current !== longPress) {
      gesture()
      prevLongPress.current = longPress
    }
  }, [longPress])
  
  return (
    <button className={styles.shareButton} onClick={onClick} onKeyDown={onKeyDown} type="button" aria-label="share this video">
      <ShareIcon />
    </button>
  )
}

export default ShareButton
