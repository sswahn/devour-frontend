import { useState } from 'react'
import { concatenateVideos } from '../../utilities/videoEditor'
import PaperPlaneIcon from '../../../components/Icons/PaperPlaneIcon/PaperPlaneIcon'

function PreviewButton({ footage }) {
  const [progress, setProgress] = useState(0) // consider moving to prent (Editor) to display progress bar overlay

  async function exportVideo() {
    try {
      setProgress(0)
      const blob = await concatenateVideos(footage, {
        onProgress: setProgress,
        width: 1920,
        height: 1080,
        fps: 30
      })

      // set preview provider
      // store in indexeddb
      
    } catch (error) {
      console.error('Video export failed:', error)
    }
  }

  return (
    <button className={styles.previewButton} onClick={exportVideo} type="button" aria-label="preview footage">
      <PaperPlaneIcon />
    </button>
  )
}

export default PreviewButton
