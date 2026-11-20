import MusicIcon from '../../../components/Icons/MusicIcon/MusicIcon'

function MusicButton({ openMusicMenu }) {

  const onClick = event => {
    // haptic
    openMusicMenu()
  }

  return (
    <button className={styles.musicButton} onClick={onClick} type="button" aria-label="open music menu">
      <MusicIcon />
    </button>
  )
}

export default MusicButton
