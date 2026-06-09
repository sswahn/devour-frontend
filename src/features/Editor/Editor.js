import { useState, useRef, useEffect } from 'react'
import useFootage from '../../hooks/useFootage'
import TopNav from './TopNav/TopNav'
import MenuButton from './MenuButton/MenuButton'
import ProgressBar from './ProgressBar/ProgressBar'
import Menu from './Menu/Menu'
import styles from './Editor.module.css'

function Editor({ closeEditor }) {
  const { footage } = useFootage()
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [source, setSource] = useState('')
  const [data, setData] = useState({
    location: '',
    caption: '',
    description: ''
  })
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
    //loadFromStorage()
  }, [])

  useEffect(() => {
    const blob = footage || new Blob()
    const videoUrl = URL.createObjectURL(blob) // pass footage directly, after testing complete
    setSource(videoUrl)
    return () => {
      URL.revokeObjectURL(videoUrl)
    }
  }, [])

  return (
    <section className={styles.editor}>
      <TopNav videoRef={videoRef} closeEditor={closeEditor} />
      <MenuButton openMenu={openMenu} />
      {menuIsOpen && <Menu data={data} setData={setData} closeMenu={closeMenu} />}
      <ProgressBar videoRef={videoRef} />
      <video id="video-editor" ref={videoRef} src={source} loop playsinline />
    </section>
  )
}

export default Editor
