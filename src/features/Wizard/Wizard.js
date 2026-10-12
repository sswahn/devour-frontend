import { useState, useEffect } from 'react'
import Camera from '../Camera/Camera'
import Editor from '../Editor/Editor'
import Publisher from '../Publisher/Publisher'
import styles from './Wizard.module.css'

function Wizard() {
  const [overlay, setOverlay] = useState('camera')

  const openCamera = () => {
    setOverlay('camera')
  }

  const openEditor = () => {
    setOverlay('editor')
  }

  const openPublisher = () => {
    setOverlay('publisher')
  }

  // useEffect is only needed for debugging here.
  useEffect(() => {
    console.log('overlay: ', overlay)
  }, [overlay])
  
  return (
    <section className={styles.wizard}>
      {overlay === 'camera' && <Camera openEditor={openEditor} />}
      {overlay === 'editor' && <Editor openCamera={openCamera} openPublisher={openPublisher} />}
      {overlay === 'publisher' && <Publisher openEditor={openEditor} />}
    </section>
  )
}

export default Wizard
