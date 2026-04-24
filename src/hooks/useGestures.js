import { useRef, useCallback } from 'react'
import useSwipe from './useSwipe'

function useGestures() {
  const id = useRef(null)
  const {
    onSwipeDown,
    onSwipeMove,
    onSwipeUp,
    onSwipeCancel
  } = useSwipe()
  
  const onGestureDown = useCallback(event => {
    const { currentTarget, pointerId } = event
    currentTarget.setPointerCapture(pointerId)
    id.current = pointerId

    onSwipeDown(event)
  }, [])
  
  const onGestureMove = useCallback(event => {
    const { pointerId } = event
    if (id?.current !== pointerId) { 
      return
    }

    const swipeMove = onSwipeMove(event)
    return { ...swipeMove }
  }, [])
  
  const onGestureUp = useCallback(event => {
    const { pointerId, currentTarget } = event
    if (id?.current !== pointerId) { 
      return console.log('failed this check: id !== pointerId', id?.current !== pointerId)
    }
    if (currentTarget.hasPointerCapture(id.current)) {
      currentTarget.releasePointerCapture(id.current)
    }    
    
    const swipeUp = onSwipeUp(event)

    console.log('onGestureUp return data: ', JSON.stringify(swipeUp))
    
    return { ...swipeUp }
  }, [])
  
  const onGestureCancel = useCallback(event => {
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
