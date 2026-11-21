import MusicIcon from '../../../components/Icons/MusicIcon/MusicIcon'
import styles from './MusicButton.module.css'

function MusicButton({ openMusicMenu }) {

  const onClick = event => {

    console.log('music button clicked.')
    
    navigator.vibrate?.(50)
    openMusicMenu()
  }

  return (
    <button className={styles.musicButton} onClick={onClick} type="button" aria-label="open music menu">
      <MusicIcon />
    </button>
  )
}

export default MusicButton
