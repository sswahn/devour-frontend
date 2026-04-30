import { useState, useRef } from 'react'
import useGestures from '../../../hooks/useGestures'
import TopNav from '../TopNav/TopNav'
import SideNav from '../SideNav/SideNav'
import styles from './FeedNode.module.css'

function FeedNode({ item, index, count }) {
  const [isDoubleTap, setIsDoubleTap] = useState(false)
  const [isLongPress, setIsLongPress] = useState(false)
  const [isPinch, setIsPinch] = useState('')
  const { onGestureDown, onGestureMove, onGestureUp, onGestureCancel } = useGestures()

  const getLongPress = longPress => {
    if (longPress) {
      setIsLongPress(longPress)
    }
  }
  
  const onPointerDown = event => {
    event.preventDefault()
    onGestureDown(event, getLongPress)
  }
  
  const onPointerMove = event => {
    const { pinch } = onGestureMove(event)
    if (pinch) {
      setIsPinch(pinch)
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
  return (
    <figure className={styles.feedNode} tabIndex={index} aria-posinset={index} aria-setsize={count}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerCancel}>
      
      <TopNav />

      {/* item.videoUrl && <video ref={ref} src={item.videoUrl} preload="metadata" muted playsInline loop /> */}
      {item.caption ?? <figcaption>{item.caption}</figcaption>}
      
      <SideNav isDoubleTap={isDoubleTap} isLongPress={isLongPress}  />
    </figure>
  )
}

export default FeedNode
