import ShareIcon from '../../../components/Icons/ShareIcon/ShareIcon'
import styles from './ShareButton.module.css'

function ShareButton({ data }) {
  const shareData = {
    title: data.title || 'Check this out!',
    text: data.text || 'I found an amazing developer guide.',
    url: data.url || 'https://developer.mozilla.org',
    files: data.files || [
      new File([blob], 'snapshot.png', { type: 'image/png' })
    ]
  }

  const action = () => {
    navigator.vibrate(50)
    navigator.share(shareData)
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
    <button className={styles.shareButton} onClick={onClick} onKeyDown={onKeyDown} type="button" aria-label="share this video">
      <ShareIcon />
    </button>
  )
}

export default ShareButton
