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
  const [source, setSource] = useState('')
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

  useEffect(() => {
    // loadFromStorage()
  }, [])

  useEffect(async () => {

    // footage is now an array of blobs
    
    console.log('footage: ', footage)
    
    const videoUrl = footage.map(obj => URL.createObjectURL(obj.clip))
    setSource(videoUrl)

    console.log('videoUrl: ', videoUrl)
    
    return () => {
      URL.revokeObjectURL(videoUrl)
    }
  }, [footage])

  return (
    <section className={styles.editor}>
      <TopNav videoRef={videoRef} openCamera={openCamera} /> 
      <ProgressBar videoRef={videoRef} />
      {menuIsOpen && <Menu data={data} setData={setData} closeMenu={closeMenu} />}
      <MenuButton openMenu={openMenu} /> 
      <SubmitButton openPublisher={openPublisher} /> 
      <video id="video-editor" ref={videoRef} src={source} autoPlay loop playsInline
        onLoadedMetadata={() => console.log('Video metadata loaded')}
        onCanPlay={() => console.log('Video can play')}
        onError={e => console.log('Video error:', e.currentTarget.error)}
      />
    </section>
  )
}

export default Editor
