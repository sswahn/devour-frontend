import { useState, useRef, useEffect } from 'react'
import useContent from '../../../hooks/useContent'
import useGestures from '../../../hooks/useGestures'
import useScrollLock from '../../../hooks/useScrollLock'
import TopNav from '../TopNav/TopNav'
import SideNav from '../SideNav/SideNav'
import Comments from '../../Comments/Comments'
import styles from './FeedNode.module.css'

function FeedNode({ item, index, count, refs = undefined, onEnded = undefined }) {
  const { content, setContent } = useContent()
  const [isDoubleTap, setIsDoubleTap] = useState(null)
  const [isLongPress, setIsLongPress] = useState(null)
  const [commentsIsOpen, setCommentsIsOpen] = useState(false)
  const { onGestureDown, onGestureMove, onGestureUp, onGestureCancel } = useGestures()
  useScrollLock(commentsIsOpen)
  
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
    console.log('onPointerDown')
    console.log('onPointerDown event.target: ', event.target)
    if (event.target.closest('.sideNav') || event.target.closest('.topNav')) {
      return
    }
    console.log('onPointerDown past condition.')
    onGestureDown(event, getLongPress)
  }
  
  const onPointerMove = event => {
    onGestureMove(event)
  }
  
  const onPointerUp = event => {
    console.log('onPointerUp')
    if (event.target.closest('.sideNav') || event.target.closest('.topNav')) {
      return
    }
    console.log('onPointerUp past condition.')
    const { tapCount } = onGestureUp(event)

    console.log('tapCount: ', tapCount)
    
    if (tapCount === 2) {
      setIsDoubleTap(performance.now())
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

  useEffect(() => {
    if (content.id !== item.id) {
      setContent({ id: item.id })
    }
  }, [])

  // swipeTo close on comments sidebar
  
  return (
    <article className={styles.feedNode} aria-posinset={index} aria-setsize={count}
      onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} onPointerCancel={onPointerCancel}>
      <figure>
        <TopNav image={item.picture} username={item.username} />
  
        {/* item.videoUrl && 
          <video 
            ref={video => { videoRefs.current[index] = video }} 
            src={item.videoUrl} 
            onEnded={onEnded}
            preload="metadata"
            playsInline
            muted
          /> 
        */}
        {item.caption && <figcaption>{item.caption}</figcaption>}
        {/* consider not using figcaption; use embeded text for frame by frame captions */}
         
        <SideNav 
          isDoubleTap={isDoubleTap} 
          isLongPress={isLongPress}
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
