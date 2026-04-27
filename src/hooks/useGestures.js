import { useRef, useCallback } from 'react'
import useSwipe from './useSwipe'

function useGestures() { // thresholds
  const id = useRef(null)
  const timer = useRef(null)
  const {
    onSwipeDown,
    onSwipeMove,
    onSwipeUp,
    onSwipeCancel
  } = useSwipe() // thresholds

  const longPressCancel = () => {
    if (timer.current) { 
      clearTimeout(timer.current)
      timer.current = null
    }
  }

  const onLongPressDown = callback => {
    timer.current = setTimeout(() => {
      callback()
      longPressCancel()
    }, 500)
  }
  
  const onGestureDown = useCallback((event, callback = undefined) => {
    const { currentTarget, pointerId } = event
    currentTarget.setPointerCapture(pointerId)
    id.current = pointerId
    onSwipeDown(event)
    if (callback) {
      onLongPressDown(callback)
    }
  }, [])
  
  const onGestureMove = useCallback(event => {
    const { pointerId } = event
    if (id?.current !== pointerId) { 
      return
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
      return
    }
    if (currentTarget.hasPointerCapture(id.current)) {
      currentTarget.releasePointerCapture(id.current)
    }
    if(!moved.current) {
      doubleTapOnUp()
    }
    const swipeUp = onSwipeUp(event)
    return { ...swipeUp }
  }, [])
  
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
  }, [])

  return {
    onGestureDown,
    onGestureMove,
    onGestureUp,
    onGestureCancel
  }
}

export default useGestures
