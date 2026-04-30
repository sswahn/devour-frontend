import { useRef, useCallback } from 'react'
import useSwipe from './useSwipe'

function useGestures() { // thresholds
  const id = useRef(null)
  const timer = useRef(null)
  const moved = useRef(false)
  const prevTap = useRef(0)
  const tapCount = useRef(0)
  const {
    onSwipeDown,
    onSwipeMove,
    onSwipeUp,
    onSwipeCancel
  } = useSwipe()

  const tapCounter = () => {
    const tapDelay = 300
    const now = performance.now()
    const deltaT = now - prevTap.current
    const isSequence = deltaT > 0 && deltaT < tapDelay
    tapCount.current = isSequence ? tapCount.current + 1 : 1 
    prevTap.current = now 
    return tapCount.current
  }

  const longPressCancel = () => {
    if (timer.current) { 
      clearTimeout(timer.current)
      timer.current = null
    }
  }

  const onLongPressDown = callback => {
    timer.current = setTimeout(() => {
      callback(true)
      longPressCancel()
    }, 500)
  }
  
  const onGestureDown = useCallback((event, callback = undefined) => {
    const { currentTarget, pointerId } = event
    currentTarget.setPointerCapture(pointerId)
    id.current = pointerId
    moved.current = false
    onSwipeDown(event)
    if (callback) {
      onLongPressDown(callback)
    }
  }, [])
  
  const onGestureMove = useCallback(event => {
    const { pointerId } = event
    if (id?.current !== pointerId) { 
      return {}
    }
    const swipeMove = onSwipeMove(event)
    const absX = Math.abs(swipeMove.deltaX)
    const absY = Math.abs(swipeMove.deltaY)
    const moveThreshold = 10
    if (absX > moveThreshold || absY > moveThreshold) {
      longPressCancel()
      moved.current = true
    }
    return { ...swipeMove }
  }, [])
  
  const onGestureUp = useCallback(event => {
    longPressCancel(event)
    const { pointerId, currentTarget } = event
    if (id?.current !== pointerId) { 
      return {}
    }
    if (currentTarget.hasPointerCapture(id.current)) {
      currentTarget.releasePointerCapture(id.current)
    }
    let taps = 0
    if(!moved.current) {
      taps = tapCounter()
    }

    console.log('Double Tap fired?: ', taps)
    
    const swipeUp = onSwipeUp(event)
    return { ...swipeUp, tapCount: taps }
  }, [])

  // Review this function for accuracy.
  const onGestureCancel = useCallback(event => {
    longPressCancel(event)
    const { pointerId, currentTarget } = event
    if (id?.current !== pointerId) { 
      return
    }
    if (currentTarget.hasPointerCapture(id.current)) {
      currentTarget.releasePointerCapture(id.current)
    }
    onSwipeCancel(event)
    id.current = null
    moved.current = false
  }, [])

  return {
    onGestureDown,
    onGestureMove,
    onGestureUp,
    onGestureCancel
  }
}

export default useGestures
