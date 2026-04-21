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

  const reset = element => {
    const { id } = data.current
    if (id !== null && element.hasPointerCapture(id)) {
      element.releasePointerCapture(id)
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
  
  const longPressOnDown = () => {
    longPressFired.current = false
    timer.current = setTimeout(() => {
      longPressFired.current = true
      setLongPress(performance.now())
      longPressCancel()
    }, longPressDelay)
  }

  const longPressOnMove = (deltaX, deltaY) => {
    if (moved.current) {
      return
    }
    if (Math.abs(deltaX) > moveThreshold || Math.abs(deltaY) > moveThreshold) {
      moved.current = true
      longPressCancel()
    }
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
    longPressOnDown()
  }

  const onPointerMove = event => {
    const { clientX, clientY, currentTarget, pointerId } = event
    const { startX, startY, activeSide, id } = data.current
    if (!data.current || pointerId !== id) {
      return
    }

    console.log('onPointerMove clientX: ', clientX)
    console.log('onPointerMove data.current: ', data.current)
    
    const deltaX = clientX - startX
    const deltaY = clientY - startY

    longPressOnMove(deltaX, deltaY)
  }

  const onPointerUp = event => {
    const { currentTarget } = event
    longPressCancel()
    
    // If moved → ignore taps
    if (moved.current || longPressFired.current) {
      return reset(currentTarget)
    }

    doubleTapOnUp()
    reset(currentTarget)
  }

  const onPointerCancel = event => {
    longPressCancel()
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
