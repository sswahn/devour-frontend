import { useState, useRef, useEffect } from 'react'
import { overlay } from '../../config'
import useOverlay from '../../hooks/useOverlay'
import useGestures from '../../hooks/useGestures'
import Dropdown from '../../components/Dropdown/Dropdown'
import styles from './Notifications.module.css'

import Avatar from '../../components/Avatar/Avatar'

function Notifications() {
  const { closeOverlay } = useOverlay()
  const [isOpen, setIsOpen] = useState(false)
  const bottomSheetRef = useRef(null)
  const dragging = useRef(false)
  const startY = useRef(0)
  const startTime = useRef(0)
  const ticking = useRef(0)
  const latestDeltaY = useRef(0)
  const latestHeight = useRef(0)
  const { onGestureDown, onGestureMove, onGestureUp, onGestureCancel } = useGestures()
  const overlayRef = useRef()
  
  const context = { 
    notifications: [
      {username: 'username', text: '12345678901234567890123456', timestamp: '5 days ago' },
      {username: 'username', text: 'testing user notification section', timestamp: '5 days ago' },
      {username: 'username', text: 'testing user notification section', timestamp: '5 days ago' },
      {username: 'username', text: 'testing user notification section', timestamp: '5 days ago' },
      {username: 'username', text: 'testing user notification section', timestamp: '5 days ago' },
    ]
  }

  // use css modules instead of inline styles.
  // .classList.add(styles.expand) / .classList.remove(styles.expand)
  //

  const open = currentTarget => {
    const bottomSheet = currentTarget || bottomSheetRef.current
    requestAnimationFrame(() => {
      bottomSheet.style.height = '100dvh'
      bottomSheet.style.transform = 'translate3d(0, 8px, 0)'
    })
  }

  /*
  const close = currentTarget => {
    const bottomSheet = currentTarget || bottomSheetRef.current
    bottomSheet.addEventListener('transitionend', closeOverlay, { once: true })
    requestAnimationFrame(() => {
      bottomSheet.style.transform = 'translate3d(0, 100dvh, 0)'
    })
  } */

  const close = currentTarget => {
    const bottomSheet = currentTarget || bottomSheetRef.current
    let finished = false
  
    const done = () => {
      if (finished) return
      finished = true
  
      bottomSheet.removeEventListener('transitionend', onEnd)
      closeOverlay()
    }

    const onEnd = event => {
      // ensure we only react to transform (not height)
      if (event.propertyName !== 'transform') return
      done()
    }
  
    bottomSheet.addEventListener('transitionend', onEnd)
  
    requestAnimationFrame(() => {
      bottomSheet.style.transform = 'translate3d(0, 100dvh, 0)'
    })
  
    // fallback safety net
    setTimeout(done, 450)
  }

  const reset = currentTarget => {
    const bottomSheet = currentTarget || bottomSheetRef.current
    requestAnimationFrame(() => {
      currentTarget.style.height = ''
      currentTarget.style.transform = ''
    })
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
    navigator.vibrate?.(50)
    const half = window.innerHeight / 2
    const grabberOffset = 9
    const height = (bottomSheetRef.current.offsetHeight - grabberOffset) - half
    height > half ? close() : open()
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
    currentTarget.style.transition = ''
    if (direction === 'up' && movement > threshold) {
      open(currentTarget)
    } else if (direction === 'down' && movement > 10) {
      close(currentTarget)
    } else {
      reset(currentTarget)
    }
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
    <div id={overlay.notifications} className={styles.notifications} ref={overlayRef} onClick={onClick} onKeyDown={onKeyDown} tabIndex={-1} role="dialog" aria-modal="true">
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
