import MusicIcon from '../../../components/Icons/MusicIcon/MusicIcon'

function MusicButton({ openMusicMenu }) {

  const onClick = event => {
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
