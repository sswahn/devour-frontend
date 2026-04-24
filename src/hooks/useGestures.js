import { useRef } from 'react'
import useSwipe from './useSwipe'

function useGestures() {
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
    if (id?.current !== pointerId) { 
      return
    }

    const swipeMove = onSwipeMove(event)
    return { ...swipeMove }
  }
  
  const onGestureUp = event => {
    
    console.log('onGestureUp')
    
    const { pointerId } = event
    
    console.log('pointerId: ', pointerId)
    
    const id = id?.current

    console.log('id: ', id)
    
    if (id !== pointerId) { 
      return console.log('failed this check: id !== pointerId', id !== pointerId)
    }

    console.log('3')
    
    if (currentTarget.hasPointerCapture(id)) {
      console.log('failed this check: currentTarget.hasPointerCapture(id)')
      currentTarget.releasePointerCapture(id)
    }

    console.log('4')

    
    
    const swipeUp = onSwipeUp(event)

    console.log('onGestureUp return data: ', JSON.stringify(swipeUp))
    return { ...swipeUp }
  }
  
  const onGestureCancel = event => {
    const { pointerId } = event
    const id = id?.current
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

export default useGestures
