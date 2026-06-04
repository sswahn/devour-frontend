import { useState } from 'react'
import camera from '../../../utilities/camera'
import MicrophoneIcon from '../../../components/Icons/MicrophoneIcon/MicrophoneIcon'
import MicrophoneSlashIcon from '../../../components/Icons/MicrophoneIcon/MicrophoneSlashIcon'
import styles from './MuteButton.module.css'

function MuteButton({ streamRef }) {
  const [mute, setMute] = useState(false)
  
  const onClick = event => {
    navigator.vibrate?.(50)
    !mute ? camera.mute(streamRef.current) : camera.unmute(streamRef.current)
    setMute(!mute)
  }
  
  return (
    <button className={styles.muteButton} onClick={onClick} type="button" aria-label={mute ? 'unmute' : 'mute'}>
      {mute ? <MicrophoneSlashIcon /> : <MicrophoneIcon />}
    </button>
  )
}

export default MuteButton
