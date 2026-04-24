import { useRef, useCallback } from 'react'

function useSwipe({ swipeThreshold = 10, edgeThreshold = 35 } = {}) {
  const data = useRef({})
  
  const onSwipeDown = useCallback(event => {
    const { clientX, clientY } = event
    const width = window.innerWidth
    const isLeft = clientX < edgeThreshold
    const isRight = clientX > width - edgeThreshold
    data.current = {
      startX: clientX,
      startY: clientY,
      direction: null,
      edge: isLeft ? 'left' : 'right'
    }
  }, [])
  
  const onSwipeMove = useCallback(event => {
    if (!Object.keys(data?.current || {}).length) {
      return
    }
    const { clientX, clientY } = event
    const { startX, startY, edge } = data.current
    const deltaX = clientX - startX
    const deltaY = clientY - startY
    const absX = Math.abs(deltaX)
    const absY = Math.abs(deltaY)
    // Determine the dominant axis of the movement:
    if (!data.current.direction) {
      data.current.direction = absX > absY ? 'x' : 'y'
    }
    return { deltaX, deltaY, edge, direction: data.current.direction }
  }, [])
  
  const onSwipeUp = useCallback(event => {
    if (!Object.keys(data?.current || {}).length) {
      return
    }
    const { clientX, clientY } = event
    const { startX, startY, edge, direction } = data.current
    const deltaX = clientX - startX
    const deltaY = clientY - startY
    return { deltaX, deltaY, edge, direction }
  }, [])
  
  const onSwipeCancel = useCallback(event => {
    data.current = {}
  }, [])

  return {
    onSwipeDown,
    onSwipeMove,
    onSwipeUp,
    onSwipeCancel
  }
}

export default useSwipe
