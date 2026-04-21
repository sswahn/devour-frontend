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
    if (timer.current) { // formally longPressCancel()
      clearTimeout(timer.current)
      timer.current = null
    }
    data.current = null
    moved.current = false
    longPressFired.current = false
  }
  
  const longPressOnDown = currentTarget => {
    longPressFired.current = false
    timer.current = setTimeout(() => {
      longPressFired.current = true
      setLongPress(performance.now())
      window.queueMicrotask(() => reset(currentTarget))
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
    
    const edgeLeft = clientX < edgeThreshold
    const edgeRight = clientX > width - edgeThreshold
    let swipeSide = undefined
    
    if (edgeLeft || edgeRight) {
      swipeSide = edgeLeft ? 'left' : 'right'
    }

    console.log('onPointerDown clientX: ', clientX)
    console.log('onPointerDown clientY: ', clientY)
    
    moved.current = false
    data.current = { 
      startX: clientX, 
      startY: clientY,
      id: pointerId,
      direction: null,
      activeSide: swipeSide
    }
    
    console.log('onPointerDown data.current set: ', data.current)
    
    currentTarget.setPointerCapture(pointerId)
    longPressOnDown(currentTarget)
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
      reset(currentTarget)
    }
  }

  const onPointerUp = event => {
    const { currentTarget } = event
    
    // If moved, ignore taps
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
