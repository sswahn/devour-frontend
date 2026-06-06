import { useState, useRef, useEffect } from 'react'
import useFootage from '../../hooks/useFootage'
import styles from './Editor.module.css'

function Editor() {
  const { footage, duration } = useFootage()
  const [source, setSource] = useState('')
  const url = useRef(null)

  const combineFootage = () => {
    const combinedBlob = new Blob(footage, { type: 'video/webm' })
    const videoUrl = URL.createObjectURL(combinedBlob)
    
    alert('videoUrl: ' + videoUrl)
    
    url.current = videoUrl
    setSource(videoUrl)
  }

  const onPlay = event => {}
  const onPause = event => {}

  useEffect(() => {
    combineFootage()
    return () => {
      URL.revokeObjectURL(url.current)
    }
  }, [])

  // should be single buttons
  
  return (
    <section className={styles.editor}>
      {pause ? ( 
        <button className="icon-btn-alt" onClick={handlePlayVideo} type="button" aria-label="play video" aria-controls={`video-preview-${index}`}>
          <PlayIcon />
          <div className="tooltip" role="tooltip">Play</div>
        </button>
      ) : ( 
        <button className="icon-btn-alt" onClick={handlePauseVideo} type="button" aria-label="pause video" aria-controls={`video-preview-${index}`}>
          <PauseIcon />
          <div className="tooltip" role="tooltip">Pause</div>
        </button>
      )}
      {mute ? (
        <button className="icon-btn-alt" onClick={handleToggleMute} type="button" aria-label="unmute video" aria-controls={`video-preview-${index}`}>
          <VolumeXIcon />
          <div className="tooltip" role="tooltip">Unmute</div>
        </button>
      ) : (
        <button className="icon-btn-alt" onClick={handleToggleMute} type="button" aria-label="mute video" aria-controls={`video-preview-${index}`}> 
          <VolumeHighIcon />
          <div className="tooltip" role="tooltip">Mute</div>
        </button>
      )}
      <video src={source} onPlay={onPlay} onPause={onPause}  loop playsinline />
    
    </section>
  )
}

export default Editor
