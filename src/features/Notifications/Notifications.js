import { useState, useRef, useEffect } from 'react'
import { overlays } from '../../config'
import useOverlay from '../../hooks/useOverlay'
import useFocusTrap from '../../hooks/useFocusTrap'
import useGestures from '../../hooks/useGestures'
import Dropdown from '../../components/Dropdown/Dropdown'
import styles from './Notifications.module.css'

import Avatar from '../../components/Avatar/Avatar'

function Notifications() {
  const { closeOverlay } = useOverlay()
  const { focusRef } = useFocusTrap()
  const [isOpen, setIsOpen] = useState(false)
  const bottomSheetRef = useRef(null)
  const latestHeight = useRef(0)
  const dragging = useRef(false)
  const startY = useRef(0)
  const startTime = useRef(0)
  const ticking = useRef(0)
  const latestDeltaY = useRef(0)
  const {
    onGestureDown,
    onGestureMove,
    onGestureUp,
    onGestureCancel
  } = useGestures()
  
  const context = { 
    notifications: [
      {username: 'username', text: '12345678901234567890123456', timestamp: '5 days ago' },
      {username: 'username', text: 'testing user notification section', timestamp: '5 days ago' },
      {username: 'username', text: 'testing user notification section', timestamp: '5 days ago' },
      {username: 'username', text: 'testing user notification section', timestamp: '5 days ago' },
      {username: 'username', text: 'testing user notification section', timestamp: '5 days ago' },
    ]
  }

  const action = () => {
    closeOverlay()
  }

  const close = () => {
    const bottomSheet = bottomSheetRef.current
    bottomSheet.style.transform = '' 
    bottomSheet.addEventListener('transitionend', action, { once: true }) 
    setIsOpen(false) // remove?
  }

  const onClick = event => {
    if (event.target === event.currentTarget) {
      navigator.vibrate?.(50)
      close()
    }
  }
  
  const onKeyDown = event => {
    if (event.key === 'Escape') {
      event.preventDefault()
      close() 
    }
  }

  const handleGrabberClick = event => {
    // if fully open, close
    // else open to fullscreen
  }

  const throttleTransition = (deltaY, height, currentTarget) => {
    latestDeltaY.current = deltaY
    latestHeight.current = height
    if (!ticking.current) {
      ticking.current = true
      requestAnimationFrame(() => {
        currentTarget.style.height = `${latestHeight.current}px`
        currentTarget.style.transform = `translate3d(0, ${latestDeltaY.current}px, 0)`
        ticking.current = false
      })
    }
  }

  const onPointerDown = event => {
    const { currentTarget } = event
    onGestureDown(event)
    latestHeight.current = currentTarget.offsetHeight
    currentTarget.style.transition = 'none'
    currentTarget.style.willChange = 'transform'
  }
  
  const onPointerMove = event => {
    const { currentTarget } = event
    const { deltaY, axis } = onGestureMove(event)
    if (deltaY === undefined || axis === 'x') {
      return
    }
    const newHeight = latestHeight.current + Math.abs(deltaY) 
    const commitThreshold = window.innerHeight * 0.75
   
    //const resistanceFactor = Math.max(0.2, commitThreshold / 300) // normalize resistance (tweak 300 for feel)
   // const adjustedDeltaY = deltaY * resistanceFactor

    const resistanceFactor = 0.5
    const translateY = deltaY * resistanceFactor
   
    // Allow upward movement now (no Math.max hack)
    let translateY = deltaY + adjustedDeltaY

    console.log('translateY: ', translateY)

    // clamp to top (don’t overshoot)
    //translateY = Math.max(8, translateY)
    
    // const translateY = Math.max(deltaY, 8)
    throttleTransition(translateY, newHeight, currentTarget)
  }
  
  const onPointerUp = event => {
    const { clientY, currentTarget } = event
    const { deltaY, direction, velocity, timestamp, tapCount } = onGestureUp(event)
    ticking.current = false // 1. Kill the move throttle immediately  

    if (tapCount > 0) { 
      return
    }
    
    // 2. State Prep: Switch transition ON
    // This curve (0.25, 1, 0.5, 1) starts fast and decelerates smoothly to a dead stop.
    currentTarget.style.transition = 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), height 0.4s cubic-bezier(0.25, 1, 0.5, 1)'
 
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (direction === 'up') {
          currentTarget.style.height = '100dvh'
          currentTarget.style.transform = 'translate3d(0, 8px, 0)'
        } else {
          currentTarget.addEventListener('transitionend', () => {
            currentTarget.style.transition = ''
            currentTarget.style.height = '0dvh'
            action()
          }, { once: true })
          currentTarget.style.transform = 'translate3d(0, 100dvh, 0)'
        }
      })
    })
  }
  
  const onPointerCancel = event => {
    onGestureCancel(event)
  }

  const handleDropDown = event => {
    alert('Dropdown button fires.')
  }

  useEffect(() => {
    // Wait for the next repaint to transition:
    const timer = requestAnimationFrame(() => {
      if (!isOpen) {
        setIsOpen(true)
        bottomSheetRef.current.focus()
      }
    })
    return () => {
      cancelAnimationFrame(timer)
    }
  }, [])
  
  return (
    <div id={overlays.notifications} className={styles.notifications} ref={focusRef} onClick={onClick} onKeyDown={onKeyDown} tabIndex={-1} role="dialog" aria-modal="true">
      <section ref={bottomSheetRef}  
        className={`${styles.bottomSheet} ${isOpen ? styles.open : ''}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
        aria-label="notifications">
        <div id="grabber" onClick={handleGrabberClick} role="presentation"></div>
        <ul aria-label="user notifications">
          {context.notifications?.map((notification, index) => 
            <li key={index}>
              <Avatar username={notification.username} image={null} />
              <div>
                <div>
                  <span>{notification.username}</span>
                  <span>{notification.timestamp}</span>
                </div>
                <div>{notification.text}</div>
              </div>
              <Dropdown />
            </li>                                                           
          )}
        </ul>
      </section>
    </div>
  )
}

export default Notifications
