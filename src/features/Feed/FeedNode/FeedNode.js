import { useState, useEffect } from 'react'
import useContent from '../../../hooks/useContent'
import useGestures from '../../../hooks/useGestures'
import TopNav from '../TopNav/TopNav'
import SideNav from '../SideNav/SideNav'
import Comments from '../../Comments/Comments'
import styles from './FeedNode.module.css'

function FeedNode({ item, index, count }) {
  const { content, setContent } = useContent()
  const [isDoubleTap, setIsDoubleTap] = useState(null)
  const [isLongPress, setIsLongPress] = useState(null)
  const { onGestureDown, onGestureMove, onGestureUp, onGestureCancel } = useGestures()

  // need a function to pass to the swipeFromEdge(func) hook
  
  const getLongPress = longPress => {
    if (longPress) {
      setIsLongPress(longPress)
    }
  }
  
  const onPointerDown = event => {
    if (event.target.closest('.sideNav') || event.target.closest('.topNav')) {
      return
    }
    onGestureDown(event, getLongPress)
  }
  
  const onPointerMove = event => {
    onGestureMove(event)
  }
  
  const onPointerUp = event => {
    if (event.target.closest('.sideNav') || event.target.closest('.topNav')) {
      return
    }
    const { tapCount } = onGestureUp(event)
    if (tapCount === 2) {
      setIsDoubleTap(tapCount)
    }
  }
  
  const onPointerCancel = event => {
    onGestureCancel(event)
  }

  useEffect(() => {
    if (content.id !== item.id) {
      setContent({ id: item.id })
    }
  }, [])

  // this tabIndex etc. breaks the natural flow of the page, header gets skipped...

  // gestures can swipe back and forth between <figure>, and <section id="comments">
  // create <Figure /> and <CommentsSection /> components
  
  return (
    <div className={styles.feedNode}>
      <figure aria-posinset={index} aria-setsize={count}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}>
        
        <TopNav />
  
        {/* item.videoUrl && <video ref={ref} src={item.videoUrl} preload="metadata" muted playsInline loop /> */}
        {item.caption && <figcaption>{item.caption}</figcaption>}
        
        <SideNav isDoubleTap={isDoubleTap} isLongPress={isLongPress} />
      </figure>

      <Comments />
    </div>
  )
}

export default FeedNode
