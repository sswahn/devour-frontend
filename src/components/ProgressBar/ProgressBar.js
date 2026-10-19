import { useEffect } from 'react'
import styles from './ProgressBar.module.css'

function ProgressBar({ progress }) {
  
  const clampedProgress = Math.max(0, Math.min(100, progress)) // Clamp the progress value between 0 and 100 to prevent layout breaking
  
  console.log('clampedProgress: ', clampedProgress)

  useEffect(() => {
    console.log('progress: ', progress)
  }, [progress])
  
  return (
    <div className={styles.progressBar} role="progressbar" aria-valuenow={clampedProgress} aria-valuemin="0" aria-valuemax="100">
      <div style={{ width: `${clampedProgress}` }} />
    </div>
  )
}

export default ProgressBar
