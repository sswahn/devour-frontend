import { useState, useRef, useEffect } from 'react'
import { concatenateVideos } from '../../utilities/videoEditor'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import TopNav from './TopNav/TopNav'
import Menu from './Menu/Menu'
import MenuButton from './MenuButton/MenuButton'
import VideoTimeline from './VideoTimeline/VideoTimeline'
import Video from './Video/Video'
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
      // save this blob
      // it will be the editable footage, and the final submission.
      // store in context and in indexeddb
      const blob = await concatenateVideos(footage, setProgress) 

      console.log('editable video blob (as opposed to footage). this should probably get its own provider/context:')
      console.log('blob: ', blob)
      console.log('this needs to be available to captions editor, etc.')
      
      const url = URL.createObjectURL(blob) // need to return this from onload and cancel it on unmount
      setSource(url)
    } catch (error) {
      console.error('Video export failed:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    // 1. Create a local placeholder variable inside the effect scope
    let activeUrl = ''
  
    const handleMediaLoad = async () => {
      try {
        // 2. Await the string URL returned by your function
        activeUrl = await onLoad() 
      } catch (error) {
        console.error("Error loading video resource:", error)
      }
    }
  
    handleMediaLoad()
  
    // 3. This cleanup sits quietly until the component unmounts
    return () => {
      if (activeUrl) {
        URL.revokeObjectURL(activeUrl) // Safely destroys the exact blob string
      }
    }
  }, [source])

  return (
    <section className={styles.editor}>
      {loading ? <LoadingSpinner /> : <>
        <TopNav videoRef={videoRef} openCamera={openCamera} /> 
        {menuIsOpen && <Menu closeMenu={closeMenu} />}
        <MenuButton openMenu={openMenu} /> 
        <VideoTimeline videoRef={videoRef} />
        <Video videoRef={videoRef} source={source} captions={captions} />
        <SubmitButton openPublisher={openPublisher} />
      </>}
    </section>
  )
}

export default Editor
