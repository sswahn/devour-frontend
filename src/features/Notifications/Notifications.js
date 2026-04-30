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
  const dragging = useRef(false)
  const startY = useRef(0)
  const startTime = useRef(0)
  const ticking = useRef(0)
  const latestDeltaY = useRef(0)
  const latestHeight = useRef(0)
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

  const open = currentTarget => {
    const bottomSheet = currentTarget || bottomSheetRef.current
    bottomSheet.style.height = '100dvh'
    bottomSheet.style.transform = 'translate3d(0, 8px, 0)'
  }
  
  const close = currentTarget => {
    const bottomSheet = currentTarget || bottomSheetRef.current
    bottomSheet.addEventListener('transitionend', action, { once: true })
    bottomSheet.style.transform = 'translate3d(0, 100dvh, 0)'
  }

  const reset = currentTarget => {
    const bottomSheet = currentTarget || bottomSheetRef.current
    currentTarget.style.height = ''
    currentTarget.style.transform = ''
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
    const bottomSheet = bottomSheetRef.current
    const height = bottomSheet.offsetHeight
    const halfViewport = window.innerHeight * 0.5
    
    console.log('bottomsheet height: ', height)
    console.log('halfviewport height: ', halfViewport)
    
    if (height < halfViewport) {
      open(bottomSheet)
    } else {
      close(bottomSheet)
    }
  }

  const throttleTransition = (deltaY, currentTarget) => {
    latestDeltaY.current = deltaY
    if (!ticking.current) {
      ticking.current = true
      requestAnimationFrame(() => {
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
    const translateY = deltaY * 0.5 // linear
    // const translateY = deltaY / (1 + Math.abs(deltaY) / 300) // asymptotic
    throttleTransition(translateY, currentTarget)
  }
  
  const onPointerUp = event => {
    const { clientY, currentTarget } = event
    const { deltaY, direction, velocity, timestamp, tapCount } = onGestureUp(event)
    ticking.current = false // 1. Kill the move throttle immediately  
    
    if (tapCount > 0) { 
      return
    }
    const threshold = window.innerHeight * 0.25
    const movement = Math.abs(deltaY)
    
    // State Prep: Switch transition ON. This curve (0.25, 1, 0.5, 1) starts fast and decelerates smoothly to a dead stop.
    currentTarget.style.transition = 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), height 0.4s cubic-bezier(0.25, 1, 0.5, 1)'
    
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (direction === 'up' && movement > threshold) {
          open(currentTarget)
        } else if (direction === 'down' && movement > 10) {
          close(currentTarget)
        } else {
          reset(currentTarget)
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
