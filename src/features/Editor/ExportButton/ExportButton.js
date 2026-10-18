import { useState } from 'react'
import concatenateVideos from '../../utilities/concatenateVideos'

function ExportButton({ footage }) {
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

      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')

      link.href = url
      link.download = 'final-video.mp4'
      link.click()

      // Allow the browser to initiate the download first.
      setTimeout(() => URL.revokeObjectURL(url), 1000)
    } catch (error) {
      console.error('Video export failed:', error)
      alert('Unable to export the video.')
    } finally {
      setExporting(false)
    }
  }

  return (
    <button
      onClick={exportVideo}
      disabled={exporting || !footage?.length}
    >
      {exporting
        ? `Exporting ${Math.round(progress * 100)}%`
        : 'Export video'}
    </button>
  )
}

export default ExportButton
