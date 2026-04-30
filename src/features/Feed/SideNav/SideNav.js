import LikeButton from '../LikeButton/LikeButton'
import CommentsButton from '../CommentsButton/CommentsButton'
import ShareButton from '../ShareButton/ShareButton'
import FullscreenButton from '../FullscreenButton/FullscreenButton'
import styles from './SideNav.module.css'

function SideNav({ isDoubleTap, isLongPress, isPinch }) {
  
  return (
    <nav className={styles.sideNav} aria-label="video actions">
      <LikeButton isDoubleTap={isDoubleTap} />
      <CommentsButton />
      <ShareButton isLongPress={isLongPress} />
      <FullscreenButton isPinch={isPinch} />
    </nav>
  )
}

export default SideNav
