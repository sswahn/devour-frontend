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
    console.log('Editor opened!')
    //loadFromStorage()
  }, [])

  useEffect(() => {

    console.log('footage: ', footage)
    
    const blob = footage || new Blob()

    console.log('blob: ', blob)
    
    const videoUrl = URL.createObjectURL(blob) // pass footage directly, after testing complete
    setSource(videoUrl)

    console.log('videoUrl: ', videoUrl)
    
    return () => {
      URL.revokeObjectURL(videoUrl)
    }
  }, [])


  useEffect(() => {
  if (!footage) return

  const testUrl = URL.createObjectURL(footage)
  const testVideo = document.createElement('video')

  testVideo.onloadedmetadata = () => {
    console.log('Test video metadata loaded:', {
      duration: testVideo.duration,
      width: testVideo.videoWidth,
      height: testVideo.videoHeight
    })

    URL.revokeObjectURL(testUrl)
  }

  testVideo.onerror = () => {
    console.error('Test video failed:', testVideo.error)
    URL.revokeObjectURL(testUrl)
  }

  testVideo.src = testUrl

  return () => {
    testVideo.removeAttribute('src')
    testVideo.load()
    URL.revokeObjectURL(testUrl)
  }
}, [footage])

  return (
    <section className={styles.editor}>
      <TopNav videoRef={videoRef} openCamera={openCamera} /> 
      <ProgressBar videoRef={videoRef} />
      {menuIsOpen && <Menu data={data} setData={setData} closeMenu={closeMenu} />}
      <MenuButton openMenu={openMenu} /> 
      <SubmitButton openPublisher={openPublisher} /> 
      <video id="video-editor" ref={videoRef} src={source} loop playsInline
        onLoadedMetadata={() => console.log('Video metadata loaded')}
        onCanPlay={() => console.log('Video can play')}
        onError={e => console.log('Video error:', e.currentTarget.error)}
      />
    </section>
  )
}

export default Editor
