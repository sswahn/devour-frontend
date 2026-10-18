import { useState } from 'react'
import Camera from '../Camera/Camera'
import Editor from '../Editor/Editor'
// import Preview from '../Preview/Preview'
import Publisher from '../Publisher/Publisher'
import styles from './Wizard.module.css'

function Wizard() {
  const [overlay, setOverlay] = useState('camera')
  const [footage, setFootage] = useState([])
  const [preview, setPreview] = useState(null)
  
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
      {overlay === 'camera' && <Camera footage={footage} setFootage={setFootage} openEditor={openEditor} />}
      {overlay === 'editor' && <Editor footage={footage} setPreview={setPreview} openCamera={openCamera} openPreview={openPreview} />}
      {/* overlay === 'preview' && <Preview preview={preview} openEditor={openEditor} openPublisher={openPublisher} /> */}
      {overlay === 'publisher' && <Publisher preview={preview} openEditor={openEditor} />}
    </section>
  )
}

export default Wizard
