import { useRef } from 'react'
import TopNav from './TopNav/TopNav'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import SubmitButton from './SubmitButton/SubmitButton'
import styles from './Preview.module.css'

function Preview({ preview, openEditor, openPublisher }) {
  const videoRef = useRef(null)
  
  return (
    <section className={styles.preview} aria-label="preview video">
      <TopNav videoRef={videoRef} openEditor={openEditor} /> 
      <ProgressBar videoRef={videoRef} />
      <video id="video-editor" ref={videoRef} autoPlay playsInline
        onLoadedMetadata={() => console.log('Video metadata loaded')}
        onCanPlay={() => console.log('Video can play')}
        onError={e => console.log('Video error:', e.currentTarget.error)}
      />
      <SubmitButton openPublisher={openPublisher} />
    </section>
  )
}

export default Preview
