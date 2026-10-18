import { useState, useRef, useEffect } from 'react'
import { concatenateVideos } from '../../utilities/videoEditor'
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
  const videoRef = useRef(null)
  
  const openMenu = () => {
    setMenuIsOpen(true)
  }
  
  const closeMenu = () => {
    setMenuIsOpen(false)
  }

  const onLoad = async event => {
    try {
      setProgress(0)
      const blob = await concatenateVideos(footage, {
        onProgress: setProgress,
        width: 1920,
        height: 1080,
        fps: 30
      })
      const url = URL.createObjectURL(blob)
      setSource(url)
    } catch (error) {
      console.error('Video export failed:', error)
    }
  }

  useEffect(() => {
    onLoad()
  }, [])

  return (
    <section className={styles.editor}>
      <TopNav videoRef={videoRef} openCamera={openCamera} /> 
      {menuIsOpen && <Menu data={data} setData={setData} closeMenu={closeMenu} />}
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
