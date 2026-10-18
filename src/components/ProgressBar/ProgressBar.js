import styles from './ProgressBar.module.css'

function ProgressBar({ progress = 0 }) {
  
  console.log('progress: ', progress)
  
  const clampedProgress = Math.max(0, Math.min(100, progress)) // Clamp the progress value between 0 and 100 to prevent layout breaking
  
  console.log('clampedProgress: ', clampedProgress)
  
  return (
    <div className={styles.progressBar} role="progressbar" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">
      <div style={{ width: `${progress}` }} />
    </div>
  )
}

export default ProgressBar
