import { useRef } from 'react'

function useSwipeFromEdge() {
  const ticking = useRef(false)
  const latestDeltaX = useRef(0)

  const throttleTransition = (deltaX, currentTarget) => {
    latestDeltaX.current = deltaX
    if (!ticking.current) {
      ticking.current = true
      requestAnimationFrame(() => {
        currentTarget.style.transform = `translate3d(${latestDeltaX.current}px, 0, 0)`
        ticking.current = false
      })
    }
  }

  const onPointerDown = event => {
    onGestureDown(event)
    overlayRef.current.style.transition = 'none' // disable snap back
    overlayRef.current.style.willChange = 'transform'
  }
  
  const onPointerMove = event => {
    const { currentTarget } = event
    const { deltaX, edge, direction } = onGestureMove(event)
    if (direction === 'y') {
      return
    }
    const raw = edge === 'left' ? Math.max(0, deltaX) : Math.min(0, deltaX)
    const resisted = raw / (1 + Math.abs(raw) / 300)
    throttleTransition(resisted, currentTarget)
  }

  const onPointerUp = event => {
    const { currentTarget } = event
    const { deltaX, edge, velocity, timestamp } = onGestureUp(event)
  
    // 1. Kill the move throttle immediately
    ticking.current = false
  
    const raw = edge === 'left' ? Math.max(0, deltaX) : Math.min(0, deltaX)
    const resisted = raw / (1 + Math.abs(raw) / 300)
    const shouldClose = Math.abs(resisted) >= 150
  
    // 2. State Prep: Switch transition ON
    currentTarget.style.transition = 'transform 0.25s cubic-bezier(0.2, 0, 0, 1)'

    
    const timeSinceLastMove = performance.now() - timestamp
  
    // 1. If they held their finger still for > 100ms, it's not a flick
    const finalVelocity = timeSinceLastMove > 100 ? 0 : velocity
  
    // 2. Define your threshold (0.5 to 1.0 is usually a good "flick" feel)
    const FLICK_THRESHOLD = 0.5
  
    if (Math.abs(finalVelocity) > FLICK_THRESHOLD) {
      console.log("Flick detected with velocity:", finalVelocity)
      // Trigger your "flick" animation here
      // flickClose()
    } else {
      console.log("Regular release or snap-back")
      //regularClose()
    }
    
  
    // 3. The "Double rAF" — Guarantees transition starts without layout thrashing
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (shouldClose) {
          navigation.vibrate?.(50)
          const translation = edge === 'left' ? '100vw' : '-100vw'
          
          currentTarget.style.transform = `translate3d(${translation}, 0, 0)`
          currentTarget.addEventListener('transitionend', action, { once: true })
        } else {
          currentTarget.style.transform = 'translate3d(0, 0, 0)'
          
          // Cleanup transition when snap-back finishes
          currentTarget.addEventListener('transitionend', () => {
            currentTarget.style.transition = ''
          }, { once: true })
        }
      })
    })
  }

  const onPointerCancel = event => {
    onGestureCancel(event)
  }

  return {
    onPointerDown,
    onPointerMove,
    onPointerUp,
    onPointerCancel
  }
}

export default useSwipeFromEdge




