import { useState } from 'react'
import useFootage from '../../hooks/useFootage'
import { concatenateVideos } from '../../../utilities/videoEditor'
import PaperPlaneIcon from '../../../components/Icons/PaperPlaneIcon/PaperPlaneIcon'
import styles from './PreviewButton.module.css'

function PreviewButton({ openPreview }) {
  const { footage } = useFootage()
  const [progress, setProgress] = useState(0) // consider moving to prent (Editor) to display progress bar overlay

  const onClick = async event => {
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
      // openPreview()
    } catch (error) {
      console.error('Video export failed:', error)
    }
  }

  return (
    <button className={styles.previewButton} onClick={onClick} type="button" aria-label="preview footage">
      <PaperPlaneIcon />
    </button>
  )
}

export default PreviewButton
