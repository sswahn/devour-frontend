import LikeButton from '../LikeButton/LikeButton'
import CommentsButton from '../CommentsButton/CommentsButton'
import ShareButton from '../ShareButton/ShareButton'
import FullscreenButton from '../FullscreenButton/FullscreenButton'
import styles from './SideNav.module.css'

function SideNav({ 
  isDoubleTap, 
  isLongPress, 
  isFullScreen, 
  enterFullScreen, 
  exitFullScreen 
}) {
  return (
    <nav className={`sideNav ${styles.sideNav}`} aria-label="video actions">
      <LikeButton isDoubleTap={isDoubleTap} />
      <CommentsButton />
      <ShareButton isLongPress={isLongPress} />
      <FullscreenButton 
        isFullScreen={isFullScreen} 
        enterFullScreen={enterFullScreen} 
        exitFullScreen={exitFullScreen} />
    </nav>
  )
}

export default SideNav
