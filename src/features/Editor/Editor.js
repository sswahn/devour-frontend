import { useState, useRef, useEffect } from 'react'
import useFootage from '../../hooks/useFootage'
import TopNav from './TopNav/TopNav'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import Menu from './Menu/Menu'
import MenuButton from './MenuButton/MenuButton'
import PreviewButton from './PreviewButton/PreviewButton'
import SubmitButton from './SubmitButton/SubmitButton'
import styles from './Editor.module.css'

function Editor({ footage, openCamera, openPublisher }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [data, setData] = useState({
    caption: ''
  })
  const [sources, setSources] = useState([])
  const [currentClipIndex, setCurrentClipIndex] = useState(0)
  const videoRef = useRef(null)
  
  const openMenu = () => {
    setMenuIsOpen(true)
  }
  
  const closeMenu = () => {
    setMenuIsOpen(false)
  }

  const loadFromStorage = () => {
    const editor = localStorage.getItem('editor')
    if (editor !== null) {
      const obj = JSON.parse(editor)
      setData(prev => ({ ...prev, ...obj }))
    }
  }

  const onEnded = event => {
    setCurrentClipIndex(index => 
      index < sources.length - 1 ? index + 1 : index
    )
  }

  useEffect(() => {
    // loadFromStorage()
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video || !sources.length) {
      return
    }
    if (currentClipIndex >= sources.length) {
      return
    }
    
    video.src = sources[currentClipIndex]
    video.load()
  
    video.play().catch(error => {
      console.error('Clip playback failed: ', error)
    })
  }, [sources, currentClipIndex])

  useEffect(() => {
    const urls = footage.map(obj => URL.createObjectURL(obj.clip))
    setCurrentClipIndex(0)
    setSources(urls)
    
    return () => {
      urls.forEach(url => URL.revokeObjectURL(url))
    }
  }, [footage])

  return (
    <section className={styles.editor}>
      <TopNav videoRef={videoRef} openCamera={openCamera} /> 
      {menuIsOpen && <Menu data={data} setData={setData} closeMenu={closeMenu} />}
      <MenuButton openMenu={openMenu} /> 
      <ProgressBar videoRef={videoRef} />
      <video id="video-editor" ref={videoRef} autoPlay playsInline 
        onEnded={onEnded}
        onLoadedMetadata={() => console.log('Video metadata loaded')}
        onCanPlay={() => console.log('Video can play')}
        onError={e => console.log('Video error:', e.currentTarget.error)}
      />
      <PreviewButton footage={footage} setPreview={setPreview} openPreview={openPreview} />
      <SubmitButton openPublisher={openPublisher} />
    </section>
  )
}

export default Editor
