import ShareIcon from '../../../components/Icons/ShareIcon/ShareIcon'
import styles from './ShareButton.module.css'

function ShareButton({ data }) {

  const action = () => {
    navigator.share({
      title: data.title || 'Check this out!',
      text: data.text || 'I found this video.',
      url: data.url || 'https://sswahn.github.io/devour-frontend',
      files: data.files || [
        new File([blob], 'snapshot.png', { type: 'image/png' })
      ]
    })
  }
  
  const onClick = event => {
    navigator.vibrate(50)
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
