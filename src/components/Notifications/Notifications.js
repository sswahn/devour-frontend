import { useState, useRef, useEffect } from 'react'
import useFocusTrap from '../../hooks/useFocusTrap'
import EllipsisVerticalIcon from '../Icons/EllipsisVerticalIcon/EllipsisVerticalIcon'
import styles from './Notifications.module.css'

import Avatar from '../Avatar/Avatar'

function Notifications({ closeNotifications }) {
  const [isOpen, setIsOpen] = useState(false)
  const focusRef = useFocusTrap()
  const bottomSheetRef = useRef(null)
  const initialHeight = useRef(0)
  const dragging = useRef(false)
  const startY = useRef(0)
  const startTime = useRef(0)
  
  const context = { 
    notifications: [
      {username: 'username', text: '12345678901234567890123456', timestamp: '5 days ago' },
      {username: 'username', text: 'testing user notification section', timestamp: '5 days ago' },
      {username: 'username', text: 'testing user notification section', timestamp: '5 days ago' },
      {username: 'username', text: 'testing user notification section', timestamp: '5 days ago' },
      {username: 'username', text: 'testing user notification section', timestamp: '5 days ago' },
    ]
  }

  const close = bottomSheet => {
    bottomSheet.style.transform = '' 
    bottomSheet.addEventListener('transitionend', closeNotifications, { once: true }) 
    setIsOpen(false)
  }

  const handleClose = event => {
    if (event.target === event.currentTarget) {
      close(bottomSheetRef.current)
    }
  }

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
    /*
    // Elasticity:
    if (deltaY < 0) {
      const resistance = Math.max(0, 1 - Math.abs(deltaY) / Math.abs(-200))
      const stretch = Math.abs(deltaY) * resistance
      bottomSheet.style.height = `${height + stretch}px`
      bottomSheet.style.transform = `translateY(0)` 
      */
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
    */

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
    <div id="notifications" className={styles.notifications} ref={focusRef} onClick={handleClose} tabIndex={-1} role="dialog" aria-modal="true">
      <section ref={bottomSheetRef}  
        className={`${styles.bottomSheet} ${isOpen ? styles.open : ''}`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
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
              <button onClick={handleDropDown} type="button" aria-label="dropdown">
                <EllipsisVerticalIcon />
              </button>
            </li>                                                           
          )}
        </ul>
      </section>
    </div>
  )
}

export default Notifications
