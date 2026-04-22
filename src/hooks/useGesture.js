import { useState, useRef } from 'react'

function useGesture({
  doubleTapDelay = 300,
  longPressDelay = 500,
  moveThreshold = 10,
  edgeThreshold = 35
} = {}) {
  const [tap, setTap] = useState(0)
  const [doubleTap, setDoubleTap] = useState(0)
  const [longPress, setLongPress] = useState(0)
  const [edgeSwipe, setEdgeSwipe] = useState('')

  const lastTapTime = useRef(0)
  const timer = useRef(null)
  const data = useRef(null)

  const moved = useRef(false)
  const longPressFired = useRef(false)

  const reset = currentTarget => {
    const { id } = data.current
    if (id && currentTarget.hasPointerCapture(id)) {
      currentTarget.releasePointerCapture(id)
    }
    data.current = null
    moved.current = false
    longPressFired.current = false
  }

  const longPressCancel = () => {
    if (timer.current) { 
      clearTimeout(timer.current)
      timer.current = null
    }
  }
  
  const longPressOnDown = currentTarget => {
    longPressFired.current = false
    timer.current = setTimeout(() => {
      longPressFired.current = true
      setLongPress(performance.now())
      longPressCancel()
    }, longPressDelay)
  }

  const doubleTapOnUp = () => {
    const now = performance.now()
    const deltaT = now - lastTapTime.current

    if (deltaT > 0 && deltaT < doubleTapDelay) {
      setDoubleTap(now)
      lastTapTime.current = 0
    } else {
      setTap(now)
      lastTapTime.current = now
    }
  }


  
  const onPointerDown = event => {
    const { clientX, clientY, currentTarget, pointerId, button } = event
    if (button !== 0) {// if right click return
      return
    }
    const width = window.innerWidth
    const edgeLeft = clientX < edgeThreshold
    const edgeRight = clientX > width - edgeThreshold
    let swipeSide = undefined
    
    if (edgeLeft || edgeRight) {
      swipeSide = edgeLeft ? 'left' : 'right'
    }
    moved.current = false
    data.current = { 
      startX: clientX, 
      startY: clientY,
      id: pointerId,
      direction: null,
      activeSide: swipeSide
    }
    currentTarget.setPointerCapture(pointerId)
    longPressOnDown(currentTarget)
  }


  const edgeSwipeOnMove = (activeSide, deltaX, deltaY) => {
    if (!activeSide) {
      return
    }
    const absDeltaX = Math.abs(deltaX)
    const absDeltaY = Math.abs(deltaY)

    // Check for unintentional movement and return
    const LOCK_THRESHOLD = 8
    if (absDeltaX < LOCK_THRESHOLD && absDeltaY < LOCK_THRESHOLD) {
      return
    }
    // Get direction, if vertical (y) reset 
    if (!data.current.direction) {
      data.current.direction = absDeltaX > absDeltaY ? 'x' : 'y'
    }
    if (data.current.direction === 'y') {
      return reset(currentTarget)
    }
    // if horizontal, perform side swipe
    const raw = activeSide === 'left' ? Math.max(0, deltaX) : Math.min(0, deltaX)
    const resistance = raw / (1 + Math.abs(raw) / 300)
    setEdgeSwipe(resistance)
    // Useage in component:
    // currentTarget.style.transform = `translateX(${resistance}px)`
  }
  
  const onPointerMove = event => {
    const { clientX, clientY, currentTarget, pointerId } = event
    const { startX, startY, activeSide, id } = data.current
    if (pointerId !== id) {
      return
    }
    const deltaX = clientX - startX
    const deltaY = clientY - startY

    if (Math.abs(deltaX) > moveThreshold || Math.abs(deltaY) > moveThreshold) {
      moved.current = true
    }

    edgeSwipeOnMove(activeSide, deltaX, deltaY, currentTarget)
  }

  const onPointerUp = event => {
    longPressCancel()
    const { pointerId, currentTarget } = event
    const { id } = data.current
    if (pointerId !== id) {
      return
    }
    
    // If moved, ignore taps. If longPress fired, gesture complete.
    if (moved.current || longPressFired.current) {
      return reset(currentTarget)
    }

    doubleTapOnUp()
    reset(currentTarget)
  }

  const onPointerCancel = event => {
    reset(event.currentTarget)
  }



  return {
    tap,
    doubleTap,
    longPress,
    handlers: {
      onPointerDown,
      onPointerMove,
      onPointerUp,
      onPointerCancel
    }
  }
}

export default useGesture
