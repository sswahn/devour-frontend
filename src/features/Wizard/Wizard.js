import { useState } from 'react'
import Camera from './Camera/Camera'
import Editor from './Editor/Editor'
import Publisher from './Publisher/Publisher'
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
  
  return (
    <section className={styles.wizard}>
      {overlay === 'camera' && <Camera />}
      {overlay === 'editor' && <Editor />}
      {overlay === 'publisher' && <Publisher />}
    </section>
  )
}

export default Wizard
