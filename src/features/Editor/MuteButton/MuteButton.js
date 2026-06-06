import { useState } from 'react'
import styles from './MuteButton.module.css'


function MuteButton() {
  const [mute, setMute] = useState(false)

  const toggleMute = event => {
    mute ? videoRefs.current.play() : videoRefs.current.pause()
    setPause(prev => !prev) 
  }

  return (
    <button className="icon-btn-alt" onClick={toggleMute} type="button" aria-label="unmute video" aria-controls={`video-preview-${index}`}>
      {mute ? <VolumeXIcon /> : <VolumeHighIcon />}
    </button>
  )
}

export default MuteButton
