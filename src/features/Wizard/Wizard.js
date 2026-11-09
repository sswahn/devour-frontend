import { useState } from 'react'
import { FootageProvider } from './components/Providers/FootageProvider'
import { CaptionsProvider } from './components/Providers/CaptionsProvider'
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

  const openPreview = () => {
    setOverlay('preview')
  }

  const openPublisher = () => {
    setOverlay('publisher')
  }
  
  return (
    <section className={styles.wizard}>
      <FootageProvider>
        <CaptionsProvider>
          {overlay === 'camera' && <Camera openEditor={openEditor} />}
          {overlay === 'editor' && <Editor openCamera={openCamera} openPublisher={openPublisher} />}
          {overlay === 'publisher' && <Publisher openEditor={openEditor} />} 
        </CaptionsProvider>
      </FootageProvider>
    </section>
  )
}

export default Wizard
