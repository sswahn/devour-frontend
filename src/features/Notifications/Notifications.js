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
    const { deltaY, direction } = onGestureMove(event)
    if (deltaY === undefined || direction === 'x') {
      return
    }
    const raw = deltaY < 0 ? deltaY : 0 
    const resisted = raw / (1 + Math.abs(raw) / 300)
    const newHeight = latestHeight.current + Math.abs(deltaY) 
    if (newHeight > 100) {
      return
    }
    throttleTransition(resisted, newHeight, currentTarget)
  }
  
  const onPointerUp = event => {
    const { clientY, currentTarget } = event
    const { deltaY, velocity, timestamp } = onGestureUp(event)
  
    // 1. Kill the move throttle immediately
    ticking.current = false
    
    const height = window.innerHeight
    const raw = deltaY < 0 ? deltaY : 0 // Only capture negative movement (upward)
    const resisted = raw / (1 + Math.abs(raw) / 300)

    // If moving down, keep it 1:1; if moving up, use the resisted value
    const finalY = clientY

    if (finalY < 0) {
      finalY = finalY / (1 + Math.abs(raw) / 300)
    }
  
    // 2. State Prep: Switch transition ON
    // currentTarget.style.transition = 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.1), height 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)'
    currentTarget.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), height 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)'
    
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (finalY < height * 0.40) {
          currentTarget.style.height = '100dvh'
          currentTarget.style.transform = 'translate3d(0, 0dvh, 0)'
        } else {
          currentTarget.addEventListener('transitionend', () => {
            currentTarget.style.transition = ''
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

  /*
  const handlePointerDown = event => {
    event.currentTarget.setPointerCapture(event.pointerId)
    startY.current = event.clientY
    startTime.current = performance.now()
    initialHeight.current = bottomSheetRef.current.offsetHeight
    dragging.current = true
  }

  
  const handlePointerMove = event => {
    if (!dragging.current) {
      return
    }
    const deltaY = event.clientY - startY.current
    const bottomSheet = bottomSheetRef.current
    const height = initialHeight.current
    
    // Elasticity:
    if (deltaY < 0) {
      const resistance = Math.max(0, 1 - Math.abs(deltaY) / Math.abs(-200))
      const stretch = Math.abs(deltaY) * resistance
      bottomSheet.style.height = `${height + stretch}px`
      bottomSheet.style.transform = `translateY(0)` 
      
      // No resistance: Map pull-up (negative deltaY) directly to height increase
    if (deltaY < 0) {
      // stretch increases as deltaY becomes more negative
      const newHeight = height + Math.abs(deltaY) 
      initialHeight.current = `${newHeight}px`
      bottomSheet.style.height = `${newHeight}px`
      bottomSheet.style.transform = `translateY(0)` // Keep anchored to bottom
    } else {
      bottomSheet.style.height = `${height}px`
      bottomSheet.style.transform = `translateY(${deltaY}px)`
    } 
  }

  const handlePointerUp = event => {
    if (!dragging.current) {
      return
    }
    // Close if sheet less than half height, or on fast swipe down.
    dragging.current = false
    event.currentTarget.releasePointerCapture(event.pointerId)
    const deltaY = event.clientY - startY.current
    const deltaTime = performance.now() - startTime.current
    const velocity = deltaY / deltaTime
    const bottomSheet = bottomSheetRef.current
    /*
    bottomSheet.style.height = ''
    if (deltaY > bottomSheet.offsetHeight / 2 || velocity > 0.8) {
      close(bottomSheet)
    } else {
      bottomSheet.style.transform = 'translateY(0)'
    }
    

      // 1. Identify current state via style, not just your ref
    const isCurrentlyFull = bottomSheet.style.height === '100vh';

    if (deltaY > 0) {
      // DRAGGING DOWN
      const closeThreshold = isCurrentlyFull ? 100 : bottomSheet.offsetHeight / 2;
      
      if (deltaY > closeThreshold || velocity > 0.8) {
        close(bottomSheet);
      } else {
        // SNAP BACK: If full, keep it 100vh. If mid, let CSS take over ('')
        bottomSheet.style.height = isCurrentlyFull ? '100vh' : '';
        bottomSheet.style.transform = 'translateY(0)';
      }
    } else {
      // DRAGGING UP
      const expandThreshold = -100;
      if (deltaY < expandThreshold || velocity < -0.8) {
        bottomSheet.style.height = '100vh';
        bottomSheet.style.transform = 'translateY(0)';
      } else {
        // SNAP BACK: If it was already full, stay full. 
        // If it was mid and didn't pull enough, go back to mid ('')
        bottomSheet.style.height = isCurrentlyFull ? '100vh' : '';
        bottomSheet.style.transform = 'translateY(0)';
      }
    }
  }

  const handlePointerCancel = event => {
    if (dragging.current) {  
      dragging.current = false 
      const bottomSheet = bottomSheetRef.current 
      bottomSheet.style.transform = 'translateY(0)' 
      bottomSheet.style.height = '' 
    }
  }
  */

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
        <div id="grabber" role="presentation"></div>
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
