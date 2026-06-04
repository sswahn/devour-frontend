import useFootage from '../../hooks/useFootage'
import styles from './VideoEditor.module.css'

function VideoEditor() {
  const { footage, duration } = useFootage()
  
  return (
    <section className={styles.videoEditor}>
      <div>

        <video src={videoUrl} preload="metadata" muted playsInline loop />
    
      </div>
    </section>
  )
}

export default VideoEditor
