import { useState } from 'react'
import EditorProvider from '../../components/Providers/EditorProvider'
import Camera from '../Camera/Camera'
import Editor from '../Editor/Editor'
import Publisher from '../Publisher/Publisher'
import styles from './Wizard.module.css'

function Wizard() {
  const [overlay, setOverlay] = useState('camera')
  const [footage, setFootage] = useState([])
    
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
    <EditorProvider>
      <section className={styles.wizard}>
        {overlay === 'camera' && <Camera footage={footage} setFootage={setFootage} openEditor={openEditor} />}
        {overlay === 'editor' && <Editor footage={footage} openCamera={openCamera} openPublisher={openPublisher} />}
        {overlay === 'publisher' && <Publisher footage={footage} openEditor={openEditor} />}
      </section>
    </EditorProvider>
  )
}

export default Wizard
