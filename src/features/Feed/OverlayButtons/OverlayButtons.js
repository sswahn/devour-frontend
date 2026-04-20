import CloseButton from '../../../components/CloseButton/CloseButton'
import Dropdown from '../../../components/Dropdown/Dropdown'
import LikeButton from '../LikeButton/LikeButton'
import CommentsButton from '../CommentsButton/CommetsButton'
import ShareButton from '../ShareButton/ShareButton'
import FullscreenButton from '../FullscreenButton/FullscreenButton'
import styles from './OverlayButtons.module.css'

function VideoOverlay({ closeFeed }) {

  // gets several gestures to be listed here.

  return (
    <nav className={styles.videoOverlay}>
      <div> {/* top of node header */}
        {isFullscreen && <CloseButton overlay="feed overlay" close={closeFeed} />}
        <Dropdown />
      </div>
      <div> {/* sidebar right */}
        <LikeButton />
        <CommentsButton />
        <ShareButton />
        <FullscreenButton />
      </div>
    </nav>
  )
}

export default VideoOverlay
