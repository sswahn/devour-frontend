import { useState, useRef } from 'react'
import useGesture from '../../../hooks/useGesture'
import TopNav from '../TopNav/TopNav'
import SideNav from '../SideNav/SideNav'

function FeedNode({ item, index, count }) {
  const {doubleTap, longPress, handlers} = useGesture()
  /*
  const [doubleTap, setDoubleTap] = useState(0)
  const [longPress, setLongPress] = useState(0)
  const timerRef = useRef(null)
  const startPos = useRef(null)
  const hasFired = useRef(false)
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

  const cancelLongPress = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
    startPos.current = null
  }

  const onPointerDown = event => {
    hasFired.current = false
    startPos.current = { 
      x: event.clientX, 
      y: event.clientY 
    }
    timerRef.current = setTimeout(() => {
      navigation.vibrate?.(50)
      hasFired.current = true
      setLongPress(performance.now())
      cancelLongPress()
    }, 500)
  }

  const onPointerMove = event => {
    if (!startPos.current || hasFired.current) {
      return
    }
    const deltaX = Math.abs(event.clientX - startPos.current.x)
    const deltaY = Math.abs(event.clientY - startPos.current.y)
    if (deltaX > 10 || deltaY > 10) {
      cancelLongPress() 
    }
  }
  
  const onPointerUp = event => {
    cancelLongPress()
  }
  
  const onPointerCancel = event => {
    cancelLongPress() 
  }

*/
  
  // all gestures go here. eventually abstracted to hooks, using gestrue engine.

  
  // this tabIndex etc. breaks the natural flow of the page, header gets skipped...
  return (
    <article  // consider using figure instead of article.
      {...handlers}
      tabIndex={index} aria-posinset={index} aria-setsize={count}>
      <TopNav />
      <figure style={{ background: '#666', borderRadius: '10px', height: '100%', width: '100%' }}>
        {/* data.videoUrl && <video ref={ref} src={data.videoUrl} preload="metadata" muted playsInline loop /> */}
        {/* data.caption ?? <figcaption>{data.caption}</figcaption> */}
      </figure>
      <SideNav doubleTap={doubleTap} longPress={longPress} />
    </article>
  )
}

export default FeedNode // memo(FeedNode)
