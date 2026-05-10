import { useEffect } from 'react'
import ShareIcon from '../../../components/Icons/ShareIcon/ShareIcon'
import styles from './ShareButton.module.css'

function ShareButton({ isLongPress }) {

  const onClick = event => {
    navigator.vibrate?.(50)
    // check navigator.canShare(file) to verify file sharing support 
    navigator.share({
      title: 'Check this out!',
      text: 'I found this video.',
      url: 'https://sswahn.github.io/devour-frontend',
      files: [
        //new File([blob], 'snapshot.png', { type: 'image/png' })
      ]
    })
  }

  useEffect(() => {
    if (isLongPress) {
      onClick()
    }
  }, [isLongPress])
  
  return (
    <button className={styles.shareButton} onClick={onClick} type="button" aria-label="share this video">
      <ShareIcon />
    </button>
  )
}

export default ShareButton
