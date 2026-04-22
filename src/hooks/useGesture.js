import { useState, useRef } from 'react'

function useGesture({
  doubleTapDelay = 300,
  longPressDelay = 500,
  moveThreshold = 10,
  edgeThreshold = 35,
  closeThreshold = 150
} = {}) {
  const [tap, setTap] = useState(0)
  const [doubleTap, setDoubleTap] = useState(0)
  const [longPress, setLongPress] = useState(0)
  const [edgeSwipe, setEdgeSwipe] = useState({
    delta: 0,
    isFinal: false,
    shouldClose: 0
  })

  const data = useRef(null)
  const timer = useRef(null)
  const moved = useRef(false)
  
  const lastTapTime = useRef(0)
  const longPressFired = useRef(false)

  const reset = currentTarget => {
    const { id } = data.current
    if (id && currentTarget.hasPointerCapture(id)) {
      currentTarget.releasePointerCapture(id)
    }
    data.current = null
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

  const edgeSwipeOnMove = (activeSide, deltaX, absDeltaX, deltaY, absDeltaY, currentTarget) => {
    if (!activeSide) {
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
    setEdgeSwipe(prev => ({ ...prev, delta: resistance }))
  }

  const edgeSwipeOnUp = (clientX, startX, activeSide) => {
    const deltaX = clientX - startX
    const isCorrectDir = activeSide === 'left' ? deltaX > 0 : deltaX < 0
    const shouldClose = Math.abs(deltaX) > closeThreshold && isCorrectDir
    setEdgeSwipe(prev => { ...prev, isFinal: true, shouldClose: shouldClose ? performance.now() : 0)
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

  const onPointerMove = event => {
    const { clientX, clientY, currentTarget, pointerId } = event
    const { startX, startY, activeSide, id } = data.current
    if (id && pointerId !== id) {
      return
    }
    const deltaX = clientX - startX
    const deltaY = clientY - startY
    const absDeltaX = Math.abs(deltaX)
    const absDeltaY = Math.abs(deltaY)
    
    moved.current = absDeltaX > moveThreshold || absDeltaY > moveThreshold

    if (absDeltaX > moveThreshold || absDeltaY > moveThreshold) {
      return longPressCancel()
    }
    edgeSwipeOnMove(activeSide, deltaX, absDeltaX, deltaY, absDeltaY, currentTarget)
  }

  const onPointerUp = event => {
    longPressCancel()
    const { clientX, pointerId, currentTarget } = event
    const { startX, activeSide, id, direction } = data.current
    if (id && pointerId !== id) {
      return
    }
    // If longPress fired, gesture complete.
    if (longPressFired.current) {
      return reset(currentTarget)
    }
    // Edge swipe active side detected, end swipe
    if (activeSide) {
      edgeSwipeOnUp(clientX, startX, activeSide) 
    } 
    // If movement in a direction, ignore taps. 
    if(!moved.current) {
      doubleTapOnUp()
    }
    reset(currentTarget)
  }

  const onPointerCancel = event => {
    const { pointerId, currentTarget } = event
    const { id } = data.current
    if (id && pointerId !== id) {
      return
    }
    longPressCancel()
    reset(currentTarget)
  }

  return {
    tap,
    doubleTap,
    longPress,
    edgeSwipeMove,
    edgeSwipeEnd,
    handlers: {
      onPointerDown,
      onPointerMove,
      onPointerUp,
      onPointerCancel
    }
  }
}

export default useGesture
