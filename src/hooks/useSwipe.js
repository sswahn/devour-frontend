import { useRef } from 'react'

function useSwipe({ swipeThreshold = 10, edgeThreshold = 35 }) {
  const data = useRef({})
  
  const onSwipeDown = event => {
    const { clientX, clientY } = event
    const width = window.innerWidth
    const isLeft = clientX < edgeThreshold
    const isRight = clientX > width - edgeThreshold
    data.current = {
      startX: clientX,
      startY: clientY,
      direction: null,
      edge: isLeft ? 'left' : 'right',
    }
  }
  
  const onSwipeMove = event => {
    if (!data.current) { // <-- invalid check, fix this
      return
    }
    const { clientX, clientY } = event
    const { startX, startY, edge } = data.current
    const deltaX = clientX - startX
    const deltaY = clientY - startY
    const absX = Math.abs(deltaX)
    const absY = Math.abs(deltaY)

    // Is there a vaild movement:
    if (absX < swipeThreshold && absY < swipeThreshold) {
      return
    }
    // Determine the dominant axis of the movement
    if (!data.current.direction) {
      data.current.direction = absX > absY ? 'x' : 'y'
    }
    return { deltaX, deltaY, edge, direction: data.current.direction }
  }
  
  const onSwipeUp = event => {
    if (!data.current) {
      return
    }
    const { clientX, clientY } = event
    const { startX, startY } = data.current
    const deltaX = clientX - startX
    const deltaY = clientY - startY
    return { deltaX, deltaY }
  }
  
  const onSwipeCancel = event => {
    data.current = {}
  }

  return {
    onSwipeDown,
    onSwipeMove,
    onSwipeUp,
    onSwipeCancel
  }
}

export default useSwipe
