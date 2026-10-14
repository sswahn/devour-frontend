import { useState, useRef, useEffect } from 'react'
import useFootage from '../../hooks/useFootage'
import TopNav from './TopNav/TopNav'
import ProgressBar from './ProgressBar/ProgressBar'
import Menu from './Menu/Menu'
import MenuButton from './MenuButton/MenuButton'
import SubmitButton from './SubmitButton/SubmitButton'
import styles from './Editor.module.css'

function Editor({ openCamera, openPublisher }) {
  const { footage } = useFootage()
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
    console.log('clip ended setting new source index...')
    setCurrentClipIndex(index => {
      if (index < sources.length - 1) {
        return index + 1
      }
      return index
    })
  }

  useEffect(() => {
    // loadFromStorage()
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video || !sources.length) {
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
    setSources(urls)
    
    return () => {
      urls.forEach(url => URL.revokeObjectURL(url))
    }
  }, [footage])

  return (
    <section className={styles.editor}>
      <TopNav videoRef={videoRef} openCamera={openCamera} /> 
      <ProgressBar videoRef={videoRef} />
      {menuIsOpen && <Menu data={data} setData={setData} closeMenu={closeMenu} />}
      <MenuButton openMenu={openMenu} /> 
      <SubmitButton openPublisher={openPublisher} /> 
      <video id="video-editor" ref={videoRef} src={sources[0]} autoPlay loop playsInline
        onEnded={onEnded}
        onLoadedMetadata={() => console.log('Video metadata loaded')}
        onCanPlay={() => console.log('Video can play')}
        onError={e => console.log('Video error:', e.currentTarget.error)}
      />
    </section>
  )
}

export default Editor
