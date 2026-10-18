import { useState } from 'react'
import concatenateVideos from '../../utilities/concatenateVideos'
import PaperPlaneIcon from '../../../components/Icons/PaperPlaneIcon/PaperPlaneIcon'

function PreviewButton({ footage }) {
  const [progress, setProgress] = useState(0)
  const [exporting, setExporting] = useState(false)

  async function exportVideo() {
    setExporting(true)
    setProgress(0)

    try {
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
      alert('Unable to export the video.')
    } finally {
      setExporting(false)
    }
  }

  return (
    <button onClick={exportVideo} disabled={exporting || !footage?.length}>
      <PaperPlaneIcon />
      {exporting ? `Exporting ${Math.round(progress * 100)}%` : 'Export video'}
    </button>
  )
}

export default PreviewButton
