import { useState } from 'react'
import styles from './MuteButton.module.css'


function MuteButton() {
  const [mute, setMute] = useState(false)

  

  return (
    <button className="icon-btn-alt" onClick={toggleMute} type="button" aria-label="unmute video" aria-controls={`video-preview-${index}`}>
      {mute ? <VolumeXIcon /> : <VolumeHighIcon />}
    </button>
  )
}

export default MuteButton
