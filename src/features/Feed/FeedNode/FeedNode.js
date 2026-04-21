import { useState, useRef } from 'react'
import SideNav from '../SideNav/SideNav'

function FeedNode({ item, index, count }) {
  const [doubleTap, setDoubleTap] = useState(0)
  const [longPress, setLongPress] = useState(0)
  const startLongPress = useRef(0)
  const prevClick = useRef(0)
  
  const doubleClick = event => {
    const now = performance.now()
    const deltaT = now - prevClick.current
    if (deltaT > 0 && deltaT < 300) {
      setDoubleTap(now)
      prevClick.current = 0
    } else {
      prevClick.current = now
    }
  }

  const onPointerDown = event => {
    startLongPress.current = performance.now()
  }
  
  const onPointerUp = event => {
    const now = performance.now()
    const deltaT = now - startLongPress.current
    if (deltaT > 500) {
      setLongPress(now)
    } 
    startLongPress.current = 0
  }
  
  const onPointerUp = () => {
    cancelLongPress()
  }
  
  const onPointerCancel = () => {
    cancelLongPress() 
  }


  
  // all gestures go here. eventually abstracted to hooks, using gestrue engine.

  
  // this tabIndex etc. breaks the natural flow of the page, header gets skipped...
  return (
    <article 
      onClick={doubleClick} 
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      tabIndex={index} aria-posinset={index} aria-setsize={count}>
      <header>
      {/*
        <AuthorButton />
        <LocationButton />

        Change 'data' back to 'item'
      */}
      </header>
      <figure style={{ background: '#666', borderRadius: '10px', height: '100%', width: '100%' }}>
        {/* data.videoUrl && <video ref={ref} src={data.videoUrl} preload="metadata" muted playsInline loop /> */}
        {/* data.caption ?? <figcaption>{data.caption}</figcaption> */}
      </figure>
      <footer>
        // static captions, meta text, etc.
      </footer>
      <SideNav doubleTap={doubleTap} longPress={longPress} />
    </article>
  )
}

export default FeedNode // memo(FeedNode)
