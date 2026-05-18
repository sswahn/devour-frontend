import LikeButton from '../LikeButton/LikeButton'
import CommentsButton from '../CommentsButton/CommentsButton'
import ShareButton from '../ShareButton/ShareButton'
import FullscreenButton from '../FullscreenButton/FullscreenButton'
import LocationButton from '../LocationButton/LocationButton'
import styles from './SideNav.module.css'

function SideNav({ 
  isDoubleTap, 
  isLongPress, 
  enterFullScreen, 
  exitFullScreen,
  openComments
}) {
  return (
    <nav className={`sideNav ${styles.sideNav}`} aria-label="video actions">
      <LikeButton isDoubleTap={isDoubleTap} />
      <CommentsButton openComments={openComments} />
      <ShareButton isLongPress={isLongPress} />
      <FullscreenButton 
        enterFullScreen={enterFullScreen} 
        exitFullScreen={exitFullScreen} />
      <LocationButton />
    </nav>
  )
}

export default SideNav
