
import styles from 'TopNav.module.css'

function TopNav() {
  return (
    <nav>
      <BackButton overlay={overlay.camera} close={closeCamera} />
      <RecordTimer mode={mode} timer={timer} setTimer={setTimer} stopCamera={stopCamera} />
      <LightButton streamRef={streamRef} />
    </nav>
  )
}

export default TopNav
