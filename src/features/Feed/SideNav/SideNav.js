import LikeButton from '../LikeButton/LikeButton'
import CommentsButton from '../CommentsButton/CommentsButton'
import ShareButton from '../ShareButton/ShareButton'
import FullscreenButton from '../FullscreenButton/FullscreenButton'
import styles from './SideNav.module.css'

function SideNav({ doubleTap, longPress }) {
  
  return (
    <div className={styles.sideNav}>
      <LikeButton doubleTap={doubleTap} />
      <CommentsButton />
      <ShareButton longPress={longPress} />
      <FullscreenButton />
    </div>
  )
}

export default SideNav
