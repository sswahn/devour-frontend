import CloseButton from '../../../components/CloseButton/CloseButton'
import Dropdown from '../../../components/Dropdown/Dropdown'
import LikeButton from '../LikeButton/LikeButton'
import CommentsButton from '../CommentsButton/CommetsButton'
import ShareButton from '../ShareButton/ShareButton'
import FullscreenButton from '../FullscreenButton/FullscreenButton'
import styles from './OverlayButtons.module.css'

function VideoOverlay({ closeFeed }) {

  // several gestures to be listed here.
  // check with gpt about existing gesture standards
  // but something like the following: 

  // double tap: like
  // long press: open comment
  // side swipe: share
  // velocity up: fullscreen

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
