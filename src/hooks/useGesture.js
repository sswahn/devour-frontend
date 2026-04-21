import { useRef, useState } from 'react'

export function useGesture({
  doubleTapDelay = 300,
  longPressDelay = 500,
  moveThreshold = 10
} = {}) {
  const [tap, setTap] = useState(0)
  const [doubleTap, setDoubleTap] = useState(0)
  const [longPress, setLongPress] = useState(0)

  const lastTapTime = useRef(0)
  const timerRef = useRef(null)
  const startPos = useRef(null)

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
    if (!startPos.current || moved.current) {
      return
    }
    if (deltaX > moveThreshold || deltaY > moveThreshold) {
      moved.current = true
      longPressCancel()
    }
  }

  const onPointerDown = event => {
    if (event.button !== 0) {// if right click return
      return
    }
    moved.current = false
    startPos.current = { 
      x: event.clientX, 
      y: event.clientY 
    }

    longPressOnDown()
  }

  const onPointerMove = event => {
    const deltaX = Math.abs(event.clientX - startPos.current.x)
    const deltaY = Math.abs(event.clientY - startPos.current.y)

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
    startPos.current = null
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
