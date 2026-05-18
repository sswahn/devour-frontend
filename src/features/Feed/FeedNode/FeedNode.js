import { useState, useRef, useEffect } from 'react'
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
  const [isFullScreen, setIsFullScreen] = useState(false)
  const [commentsIsOpen, setCommentsIsOpen] = useState(false)
  const { onGestureDown, onGestureMove, onGestureUp, onGestureCancel } = useGestures()


  const openComments = () => {
    setCommentsIsOpen(true)
  }

  const closeComments = () => {
    setCommentsIsOpen(false)
  }



  
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

  const enterFullScreen = async () => {
    await document.documentElement.requestFullscreen()
    await screen.orientation?.lock?.('portrait')
  }

  const exitFullScreen = async () => {
    screen.orientation?.unlock?.()
    await document.exitFullscreen()
  }
  
  const onFullScreenChange = event => {
    setIsFullScreen(!!document.fullscreenElement)
  }

  useEffect(() => {
    document.addEventListener('fullscreenchange', onFullScreenChange)
    return () => {
      document.removeEventListener('fullscreenchange', onFullScreenChange)
    }
  }, [])

  useEffect(() => {
    if (content.id !== item.id) {
      setContent({ id: item.id })
    }
  }, [])

  // swipeTo close on comments sidebar
  
  return (
    <article className={styles.feedNode} aria-posinset={index} aria-setsize={count}>
      <figure onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} onPointerCancel={onPointerCancel}>
        <TopNav isFullSreen={isFullScreen} exitFullScreen={exitFullScreen} />
  
        {/* item.videoUrl && <video ref={ref} src={item.videoUrl} preload="metadata" muted playsInline loop /> */}
        {item.caption && <figcaption>{item.caption}</figcaption>}
        
        <SideNav 
          isDoubleTap={isDoubleTap} 
          isLongPress={isLongPress}
          isFullScreen={isFullScreen}
          enterFullScreen={enterFullScreen}
          exitFullScreen={exitFullScreen}
          openComments={openComments}
        />
      </figure>
      {commentsIsOpen && <Comments closeComments={closeComments} />}
    </article>
  )
}

export default FeedNode
