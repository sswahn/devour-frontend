import { useRef } from 'react'
import useSwipe from './useSwipe'

function useGesture() {
  const id = useRef(null)
  const {
    onSwipeDown,
    onSwipeMove,
    onSwipeUp,
    onSwipeCancel
  } = useSwipe()
  
  const onGestureDown = event => {
    const { currentTarget, pointerId } = event
    currentTarget.setPointerCapture(pointerId)
    id.current = pointerId

    onSwipeDown(event)
  }
  
  const onGestureMove = event => {
    const { pointerId } = event
    if (id.current !== pointerId) { 
      return
    }

    const swipeMove = onSwipeMove(event)
    return { ...swipeMove }
  }
  
  const onGestureUp = event => {
    const { pointerId } = event
    const id = id.current
    if (id !== pointerId) { 
      return
    }
    if (currentTarget.hasPointerCapture(id)) {
      currentTarget.releasePointerCapture(id)
    }
    
    const swipeUp = onSwipeUp(event)
    return { ...swipeUp }
  }
  
  const onGestureCancel = event => {
    const { pointerId } = event
    const id = id.current
    if (id !== pointerId) { 
      return
    }
    if (currentTarget.hasPointerCapture(id)) {
      currentTarget.releasePointerCapture(id)
    }
    
    onSwipeCancel()
  }

  return {
    onGestureDown,
    onGestureMove,
    onGestureUp,
    onGestureCancel
  }
}

export default useGesture
