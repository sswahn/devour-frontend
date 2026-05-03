import { useState, useRef } from 'react'
import { createObserver } from '../../../utilities/observer'
import useGestures from '../../../hooks/useGestures'
import TopNav from '../TopNav/TopNav'
import SideNav from '../SideNav/SideNav'
import Comments from '../../Comments/Comments'
import styles from './FeedNode.module.css'

function FeedNode({ item, index, count }) {
  const [isDoubleTap, setIsDoubleTap] = useState(null)
  const [isLongPress, setIsLongPress] = useState(null)
  const [isPinch, setIsPinch] = useState(null)
  const { observe, unobserve, disconnect } = createObserver()
  const { onGestureDown, onGestureMove, onGestureUp, onGestureCancel } = useGestures()


  // need a function to pass to the swipeFromEdge(func) hook
  // the figure needs to 
  
  const getLongPress = longPress => {
    if (longPress) {
      setIsLongPress(longPress)
    }
  }
  
  const onPointerDown = event => {
    const { isPinching } = onGestureDown(event, getLongPress)
    console.log('feedNode onPointerDown isPinching: ', isPinching)

  }
  
  const onPointerMove = event => {
    const { isPinching, pinchDirection } = onGestureMove(event)
    console.log('feedNode onPointerMove isPinching: ', isPinching)
    console.log('feedNode onPointerMove pinchDirection: ', pinchDirection)
    if (isPinching) {
      setIsPinch(pinchDirection)
    }
  }
  
  const onPointerUp = event => {
    const { tapCount } = onGestureUp(event)
    if (tapCount === 2) {
      setIsDoubleTap(tapCount)
    }
  }
  
  const onPointerCancel = event => {
    onGestureCancel(event)
  }

  // this tabIndex etc. breaks the natural flow of the page, header gets skipped...

  // gestures can swipe back and forth between <figure>, and <section id="comments">
  // create <Figure /> and <CommentsSection /> components
  
  return (
    <div className={styles.feedNode}>
      <figure tabIndex={index} aria-posinset={index} aria-setsize={count}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}>
        
        <TopNav />
  
        {/* item.videoUrl && <video ref={ref} src={item.videoUrl} preload="metadata" muted playsInline loop /> */}
        {item.caption ?? <figcaption tabIndex="0">{item.caption}</figcaption>}
        
        <SideNav isDoubleTap={isDoubleTap} isLongPress={isLongPress} isPinch={isPinch} />
      </figure>

      <Comments />
    </div>
  )
}

export default FeedNode
