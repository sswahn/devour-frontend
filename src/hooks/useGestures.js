import { useRef, useCallback } from 'react'
import useSwipe from './useSwipe'
import useLongPress from './useLongPress'

function useGestures() {
  const id = useRef(null)
  const {
    onSwipeDown,
    onSwipeMove,
    onSwipeUp,
    onSwipeCancel
  } = useSwipe()
  const {
    onLongPressDown,
    onLongPressMove,
    onLongPressUp,
    onLongPressCancel
  } = useSwipe()
  
  const onGestureDown = useCallback((event, callback = undefined) => {
    const { currentTarget, pointerId } = event
    currentTarget.setPointerCapture(pointerId)
    id.current = pointerId
    onSwipeDown(event)
    if (callback) {
      onLongPressDown(event, callback)
    }
  }, [callback])
  
  const onGestureMove = useCallback(event => {
    onLongPressMove(event)
    const { pointerId } = event
    if (id?.current !== pointerId) { 
      return
    }
    const swipeMove = onSwipeMove(event)
    return { ...swipeMove }
  }, [])
  
  const onGestureUp = useCallback(event => {
    onLongPressUp(event)
    const { pointerId, currentTarget } = event
    if (id?.current !== pointerId) { 
      return console.log('failed this check: id !== pointerId', id?.current !== pointerId)
    }
    if (currentTarget.hasPointerCapture(id.current)) {
      currentTarget.releasePointerCapture(id.current)
    }
    const swipeUp = onSwipeUp(event)
    return { ...swipeUp }
  }, [])
  
  const onGestureCancel = useCallback(event => {
    onLongPressCancel(event)
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
