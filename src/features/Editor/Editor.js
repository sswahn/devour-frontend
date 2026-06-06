import { useState, useRef, useEffect } from 'react'
import useFootage from '../../hooks/useFootage'
import styles from './Editor.module.css'

function Editor() {
  const { footage, duration } = useFootage()
  const [pause, setPause] = useState(false)
  const [mute, setMute] = useState(false)
  const [source, setSource] = useState('')
  const url = useRef(null)

  const combineFootage = () => {
    const combinedBlob = new Blob(footage, { type: 'video/webm' })
    const videoUrl = URL.createObjectURL(combinedBlob)
    url.current = videoUrl
    setSource(videoUrl)
  }

  const onPlay = event => {}
  const onPause = event => {}
  const togglePause = event => {}
  const toggleMute = event => {}

  useEffect(() => {
    combineFootage()
    return () => {
      URL.revokeObjectURL(url.current)
    }
  }, [])

  // should be single buttons
  
  return (
    <section className={styles.editor}>
      {pause &&
        <button className="icon-btn-alt" onClick={togglePause} type="button" aria-label={`${pause ? 'play' : 'pause'} video`}>
          {pause ? <PlayIcon /> : <PauseIcon />}
        </button>
      }
      {mute ? (
        <button className="icon-btn-alt" onClick={toggleMute} type="button" aria-label="unmute video" aria-controls={`video-preview-${index}`}>
          {mute ? <VolumeXIcon /> : <VolumeHighIcon />}
        </button>
      ) : (
        <button className="icon-btn-alt" onClick={handleToggleMute} type="button" aria-label="mute video" aria-controls={`video-preview-${index}`}> 
          
          <div className="tooltip" role="tooltip">Mute</div>
        </button>
      )}
      <video src={source} onPlay={onPlay} onPause={onPause}  loop playsinline />
    
    </section>
  )
}

export default Editor
