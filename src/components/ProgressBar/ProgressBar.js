import styles from './ProgressBar.module.css'

function ProgressBar({ progress = 0 }) {
  // Clamp the progress value between 0 and 100 to prevent layout breaking
  const clampedProgress = Math.max(0, Math.min(100, progress))

  // Inline styles for the outer track and the moving fill
  const containerStyle = {
    width: '100%',
    backgroundColor: '#e0e0e0',
    borderRadius: '4px',
    overflow: 'hidden',
  }

  const barStyle = {
    width: `${clampedProgress}%`,
    height: '12px',
    backgroundColor: '#3b82f6', // Font Awesome-style Blue
    borderRadius: '4px',
    transition: 'width 0.3s ease-out', // Smoothly slides when the prop updates
  }

  return (
    <div style={containerStyle} role="progressbar" aria-valuenow={clampedProgress} aria-valuemin="0" aria-valuemax="100">
      <div style={barStyle} />
    </div>
  )
}

export default ProgressBar
