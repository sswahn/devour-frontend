import { useRef } from 'react'
import useSwipe from './useSwipe'

function useGesture() {
  const id = useRef(null)
  const {
    onGestureDown,
    onGestureMove,
    onGestureUp,
    onGestureCancel
  } = useSwipe()

  const reset = currentTarget => {
    const id = id.current
    if (currentTarget.hasPointerCapture(id)) {
      currentTarget.releasePointerCapture(id)
    }
    id.current = null
  }
  
  const onGestureDown = event => {
    const { currentTarget, pointerId } = event
    currentTarget.setPointerCapture(pointerId)

    
  }
  
  const onGestureMove = event => {
    const { pointerId } = event
    if (id.current !== pointerId) { 
      return
    }
  }
  
  const onGestureUp = event => {
    const { pointerId } = event
    if (id.current !== pointerId) { 
      return
    }
  }
  
  const onGestureCancel = event => {
    const { pointerId } = event
    if (id.current !== pointerId) { 
      return
    }
  }

  return {
    onGestureDown,
    onGestureMove,
    onGestureUp,
    onGestureCancel
  }
}

export default useGesture
