import { useState, useRef, useEffect } from 'react'
import { concatenateVideos } from '../../utilities/videoEditor'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import TopNav from './TopNav/TopNav'
import Menu from './Menu/Menu'
import MenuButton from './MenuButton/MenuButton'
import VideoTimeline from './VideoTimeline/VideoTimeline'
import SubmitButton from './SubmitButton/SubmitButton'
import styles from './Editor.module.css'

function Editor({ footage, openCamera, openPublisher }) {
  const [progress, setProgress] = useState(0)
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [source, setSource] = useState([])
  const [loading, setLoading] = useState(false)
  const videoRef = useRef(null)

  const openMenu = () => {
    setMenuIsOpen(true)
  }
  
  const closeMenu = () => {
    setMenuIsOpen(false)
  }

  const onLoad = async event => {
    try {
      //setProgress(0)
      setLoading(true)
      const blob = await concatenateVideos(footage, setProgress)
      const url = URL.createObjectURL(blob)
      setSource(url)
    } catch (error) {
      console.error('Video export failed:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    onLoad()
  }, [])

  // return progress < 100 ? <ProgressBar progress={progress} /> : (
  return loading ? <LoadingSpinner /> : (
    <section className={styles.editor}>
      <TopNav videoRef={videoRef} openCamera={openCamera} /> 
      {menuIsOpen && <Menu closeMenu={closeMenu} />}
      <MenuButton openMenu={openMenu} /> 
      <VideoTimeline videoRef={videoRef} />
      <video id="video-editor" ref={videoRef} src={source} autoPlay playsInline 
        onLoadedMetadata={() => console.log('Video metadata loaded')}
        onCanPlay={() => console.log('Video can play')}
        onError={e => console.log('Video error:', e.currentTarget.error)}
      />
      <SubmitButton openPublisher={openPublisher} />
    </section>
  )
}

export default Editor
