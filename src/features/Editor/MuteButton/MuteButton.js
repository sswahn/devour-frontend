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
    <button className="icon-btn-alt" onClick={toggleMute} type="button" aria-label="unmute video" aria-controls={`video-preview-${index}`}>
      {mute ? <VolumeXIcon /> : <VolumeHighIcon />}
    </button>
  )
}

export default MuteButton
