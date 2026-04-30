import { useState, useRef } from 'react'
import useGestures from '../../../hooks/useGestures'
import TopNav from '../TopNav/TopNav'
import SideNav from '../SideNav/SideNav'

function FeedNode({ item, index, count }) {
  const {
    onPointerDown,
    onPointerMove,
    onPointerUp,
    onPointerCancel
  } = useGestures()


  
  // this tabIndex etc. breaks the natural flow of the page, header gets skipped...
  return (
    <figure style={{ background: '#666', borderRadius: '10px', height: '100%', width: '100%' }}
      tabIndex={index} aria-posinset={index} aria-setsize={count}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerCancel}>
      <TopNav />
        
      {/* data.videoUrl && <video ref={ref} src={data.videoUrl} preload="metadata" muted playsInline loop /> */}
      {/* data.caption ?? <figcaption>{data.caption}</figcaption> */}

      {/* <SideNav doubleTap={doubleTap} longPress={longPress}  /> */}
    </figure>
  )
}

export default FeedNode // memo(FeedNode)
