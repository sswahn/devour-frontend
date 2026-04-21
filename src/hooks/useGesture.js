import { useRef, useState } from 'react'

export function useGesture({
  doubleTapDelay = 300,
  longPressDelay = 500,
  moveThreshold = 10,
  edgeThreshold = 35
} = {}) {
  const [tap, setTap] = useState(0)
  const [doubleTap, setDoubleTap] = useState(0)
  const [longPress, setLongPress] = useState(0)

  const lastTapTime = useRef(0)
  const timerRef = useRef(null)
  const gestureData = useRef(null)

  const moved = useRef(false)
  const longPressFired = useRef(false)

  const longPressCancel = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
  }
  
  const longPressOnDown = () => {
    longPressFired.current = false
    
    timerRef.current = setTimeout(() => {
      longPressFired.current = true
      setLongPress(performance.now())
      longPressCancel()
    }, longPressDelay)
  }

  const longPressOnMove = () => {
    if (!gestureData.current || moved.current) {
      return
    }
    if (Math.abs(deltaX) > moveThreshold || Math.abs(deltaY) > moveThreshold) {
      moved.current = true
      longPressCancel()
    }
  }

  const onPointerDown = event => {
    const { button, clientX, clientY, currentTarget, pointerId } = event
    if (button !== 0) {// if right click return
      return
    }
    moved.current = false

    let swipeSide = null
    const isLeft = clientX < edgeThreshold
    const isRight = clientX > width - edgeThreshold
    if (isLeft || isRight) {
      swipeSide: isLeft ? 'left' : 'right',
    }
    
    gestureData.current = { 
      startX: clientX, 
      startY: clientY,
      id: pointerId,
      direction: null,
      activeSide: swipeSide
    }
    currentTarget.setPointerCapture(pointerId)
    longPressOnDown()
  }

  const onPointerMove = event => {
    const { clientX, clientY, currentTarget, pointerId } = event
    const { startX, startY, activeSide, id } = gestureData.current
    
    const deltaX = clientX - startX
    const deltaY = clientY - startY

    longPressOnMove(deltaX, deltaY)
  }

  const onPointerUp = () => {
    longPressCancel()

    // If long press already fired → ignore taps
    if (longPressFired.current) {
      return reset()
    }

    // If moved → ignore taps
    if (moved.current) {
      return reset()
    }

    const now = performance.now()
    const delta = now - lastTapTime.current

    if (delta > 0 && delta < doubleTapDelay) {
      setDoubleTap(now)
      lastTapTime.current = 0
    } else {
      setTap(now)
      lastTapTime.current = now
    }

    reset()
  }

  const onPointerCancel = () => {
    longPressCancel()
    reset()
  }

  const reset = () => {
    gestureData.current = null
    moved.current = false
    longPressFired.current = false
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
