import { useState } from 'react'
import { FootageProvider } from '../../components/Providers/FootageProvider'
import { CompositionProvider } from '../../components/Providers/CompositionProvider'
import { CaptionsProvider } from '../../components/Providers/CaptionsProvider'
import { CardsProvider } from '../../components/Providers/CardsProvider'
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
        <CompositionProvider>
          <CaptionsProvider>
            <CardsProvider>
              {overlay === 'camera' && <Camera openEditor={openEditor} />}
              {overlay === 'editor' && <Editor openCamera={openCamera} openPublisher={openPublisher} />}
              {overlay === 'publisher' && <Publisher openEditor={openEditor} />} 
            </CardsProvider>
          </CaptionsProvider>
        </CompositionProvider>
      </FootageProvider>
    </section>
  )
}

export default Wizard
