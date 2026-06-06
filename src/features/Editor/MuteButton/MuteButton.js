import { useState } from 'react'
import VolumeHighIcon from '../../../components/Icons/VolumeHighIcon/VolumeHighIcon'
import VolumeXIcon from '../../../components/Icons/VolumeXIcon/VolumeXIcon'
import styles from './MuteButton.module.css'

function MuteButton({ videoRef }) {
  const [mute, setMute] = useState(false)

  const toggleMute = event => {
    videoRef.current.muted = !mute
    setMute(prev => !prev) 
  }

  return (
    <button className={styles.muteButton} onClick={toggleMute} type="button" aria-label={`${mute ? 'unmute' : 'mute'} video`} aria-controls="video-editor">
      {mute ? <VolumeXIcon /> : <VolumeHighIcon />}
    </button>
  )
}

export default MuteButton
