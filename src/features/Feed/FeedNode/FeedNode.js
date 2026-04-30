import { useState, useRef } from 'react'
import useGestures from '../../../hooks/useGestures'
import TopNav from '../TopNav/TopNav'
import SideNav from '../SideNav/SideNav'

function FeedNode({ item, index, count }) {
  const [isDoubleTap, setIsDoubleTap] = useState(false)
  const [isLongPress, setIsLongPress] = useState(false)
  const { onGestureDown, onGestureMove, onGestureUp, onGestureCancel } = useGestures()

  const getLongPress = longPress => {
    if (longPress) {
      setIsLongPress(true)
    }
  }
  
  const onPointerDown = event => {
    onGestureDown(event, getLongPress)
  }
  
  const onPointerMove = event => {
    onGestureMove(event)
  }
  
  const onPointerUp = event => {
    const { tapCount } = onGestureUp(event)
    if (tapCount === 2) {
      setIsDoubleTap(true)
    }
  }
  
  const onPointerCancel = event => {
    onGestureCancel(event)
  }

  // this tabIndex etc. breaks the natural flow of the page, header gets skipped...
  return (
    <figure tabIndex={index} aria-posinset={index} aria-setsize={count}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerCancel}>
      <TopNav />
        
      {/* data.videoUrl && <video ref={ref} src={data.videoUrl} preload="metadata" muted playsInline loop /> */}
      {/* data.caption ?? <figcaption>{data.caption}</figcaption> */}

      <SideNav isDoubleTap={isDoubleTap} isLongPress={isLongPress}  />
    </figure>
  )
}

export default FeedNode // memo(FeedNode)
