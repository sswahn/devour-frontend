import { useState, useRef, useEffect } from 'react'
import { overlay } from '../../config'
import { dropdown, test_data } from './config' // delete test_data
import useOverlay from '../../hooks/useOverlay'
import useGestures from '../../hooks/useGestures'
import Dropdown from '../../components/Dropdown/Dropdown'
import styles from './Notifications.module.css'

import Avatar from '../../components/Avatar/Avatar'

function Notifications() {
  const { closeOverlay } = useOverlay()
  const [mode, setMode] = useState('')
  const dragging = useRef(false)
  const startY = useRef(0)
  const startTime = useRef(0)
  const ticking = useRef(0)
  const latestDeltaY = useRef(0)
  const { onGestureDown, onGestureMove, onGestureUp, onGestureCancel } = useGestures()
  const overlayRef = useRef(null)
  const bottomSheetRef = useRef(null)

  const close = () => {
    setMode('close')
    bottomSheetRef.current.addEventListener('transitionend', closeOverlay, {
      once: true,
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
    event.stopPropagation()
    navigator.vibrate?.(50)
    mode === 'expand' ? close() : setMode('expand')
  }

  const applyElasticDrag = deltaY => {
    const limit = mode === 'expand' && deltaY < 0 ? 10 : 200
    const k = 600 // Increase to make growth feel heavier
    const absDeltaY = Math.abs(deltaY)
    const translation = limit * (absDeltaY / (absDeltaY + k))
    return Math.sign(deltaY) * translation
  }

  const throttleTransition = (deltaY, currentTarget) => {
    latestDeltaY.current = deltaY
    if (!ticking.current) {
      ticking.current = true
      requestAnimationFrame(() => {
        currentTarget.style.setProperty('--drag-y', `${latestDeltaY.current}px`)
        ticking.current = false
      })
    }
  }

  const onPointerDown = event => {
    const { currentTarget } = event
    onGestureDown(event)
    currentTarget.classList.add(styles.dragging)
  }
  
  const onPointerMove = event => {
    const { currentTarget } = event
    const { deltaY, axis } = onGestureMove(event)
    if (deltaY === undefined || axis === 'x') {
      return
    }
    const translateY = applyElasticDrag(deltaY)
    throttleTransition(translateY, currentTarget)
  }
  
  const onPointerUp = event => {
    const { clientY, currentTarget } = event
    const { deltaY, direction, velocity, timestamp, tapCount } = onGestureUp(event)
    ticking.current = false // Kill the move throttle immediately  
    currentTarget.classList.remove(styles.dragging)
    currentTarget.style.removeProperty('--drag-y')
    if (tapCount > 0) { 
      return
    }
    const height = window.visualViewport?.height || window.innerHeight
    const threshold = height * 0.15
    const movement = Math.abs(deltaY)
    if (direction === 'up' && movement > threshold) {
      setMode('expand')
    } else if (direction === 'down' && movement > threshold) {
      close()
    } else {
      setMode(prev => prev === 'expand' ? 'expand' : 'peek')
    }
  }
  
  const onPointerCancel = event => {
    const { currentTarget } = event
    currentTarget.classList.remove(styles.dragging)
    currentTarget.style.removeProperty('--drag-y')
    onGestureCancel(event)
  }

  useEffect(() => {
  //  requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setMode('peek')
      })
 //   })
  }, [])
  
  return (
    <div 
      id={overlay.notifications} 
      ref={overlayRef} 
      className={`${styles.notifications} ${mode === 'close' ? styles.closeOverlay : ''}`} 
      onClick={onClick} 
      onKeyDown={onKeyDown} 
      tabIndex={-1} 
      role="dialog" 
      aria-modal="true">
      <section 
        ref={bottomSheetRef}  
        className={[
          styles.bottomSheet,
          mode === 'peek' && styles.peek,
          mode === 'expand' && styles.expand,
          mode === 'close' && styles.close
        ].filter(Boolean).join(' ')}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
        aria-label="notifications">
        <div id="grabber" onClick={handleGrabberClick} role="presentation"></div>
        <ul aria-label="user notifications">
          {test_data.notifications?.map((notification, index) => 
            <li key={index}>
              <article>
                <header>
                  <Avatar username={notification.username} image={null} />
                  <h2>{notification.username}</h2>
                  <time datetime={notification.timestamp}>{notification.timestamp}</time>
                </header>
                <div>
                  <p>{notification.text}</p>
                </div>
                <footer>
                  <Dropdown items={dropdown} />
                </footer>
              </article>
            </li>                                                           
          )}
        </ul>
      </section>
    </div>
  )
}

export default Notifications
