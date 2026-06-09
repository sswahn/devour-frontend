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
  const [source, setSource] = useState('')
  const [data, setData] = useState({
    caption: ''
  })
  const videoRef = useRef(null)

  const openMenu = () => {
    setMenuIsOpen(true)
  }
  
  const closeMenu = () => {
    setMenuIsOpen(false)
  }

  /*
  const loadFromStorage = () => {
    const editor = localStorage.getItem('editor')
    if (editor !== null) {
      const obj = JSON.parse(editor)
      setData(prev => ({ ...prev, ...obj }))
    }
  } */

  useEffect(() => {
    //loadFromStorage()
  }, [])

  useEffect(() => {
    console.log('Editor opened!')
    
    const blob = footage || new Blob()
    const videoUrl = URL.createObjectURL(blob) // pass footage directly, after testing complete
    setSource(videoUrl)
    return () => {
      URL.revokeObjectURL(videoUrl)
    }
  }, [])

  return (
    <section className={styles.editor}>
      <TopNav videoRef={videoRef} openCamera={openCamera} />
      <ProgressBar videoRef={videoRef} />
      {menuIsOpen && <Menu data={data} setData={setData} closeMenu={closeMenu} />}
      <MenuButton openMenu={openMenu} />
      <SubmitButton openPublisher={openPublisher} />
      <video id="video-editor" ref={videoRef} src={source} loop playsinline />
    </section>
  )
}

export default Editor
