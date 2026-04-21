import { useEffect } from 'react'
import ShareIcon from '../../../components/Icons/ShareIcon/ShareIcon'
import styles from './ShareButton.module.css'

function ShareButton({ longPress }) {

  const action = () => {
    navigator.share({
      title: 'Check this out!',
      text: 'I found this video.',
      url: 'https://sswahn.github.io/devour-frontend',
      files: [
        //new File([blob], 'snapshot.png', { type: 'image/png' })
      ]
    })
  }

  const gesture = () => {
    if (longPress) {
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
  }, [longPress])
  
  return (
    <button className={styles.shareButton} onClick={onClick} onKeyDown={onKeyDown} type="button" aria-label="share this video">
      <ShareIcon />
    </button>
  )
}

export default ShareButton
