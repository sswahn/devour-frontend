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

  const cancelLongPress = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
    startPos.curret = null
  }

  const onPointerDown = event => {
    // if right click return
    if (event.button !== 0) {
      return
    }

    moved.current = false
    longPressFired.current = false

    startPos.current = { 
      x: event.clientX, 
      y: event.clientY 
    }

    timerRef.current = setTimeout(() => {
      longPressFired.current = true
      navigator.vibrate?.(50)
      setLongPress(performance.now())
      cancelLongPress()
    }, longPressDelay)
  }

  const onPointerMove = event => {
    if (!startPos.current || moved.current) {
      return
    }

    const deltaX = Math.abs(event.clientX - startPos.current.x)
    const deltaY = Math.abs(event.clientY - startPos.current.y)

    if (deltaX > moveThreshold || deltaY > moveThreshold) {
      moved.current = true
      cancelLongPress()
    }
  }

  const onPointerUp = () => {
    cancelLongPress()

    // If long press already fired → ignore taps
    if (longPressFired.current) {
      reset()
      return
    }

    // If moved → ignore taps
    if (moved.current) {
      reset()
      return
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
    cancelLongPress()
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
