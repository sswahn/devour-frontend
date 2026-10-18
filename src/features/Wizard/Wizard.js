import { useState } from 'react'
import Camera from '../Camera/Camera'
import Editor from '../Editor/Editor'
// import Preview from '../Preview/Preview'
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

  const openPreview = () => {
    setOverlay('preview')
  }

  const openPublisher = () => {
    setOverlay('publisher')
  }
  
  return (
    <section className={styles.wizard}>
      {overlay === 'camera' && <Camera openEditor={openEditor} />}
      {overlay === 'editor' && <Editor openCamera={openCamera} openPreview={openPreview} />}
      {/* overlay === 'preview' && <Preview openEditor={openEditor} openPublisher={openPublisher} /> */}
      {overlay === 'publisher' && <Publisher openEditor={openEditor} />}
    </section>
  )
}

export default Wizard
