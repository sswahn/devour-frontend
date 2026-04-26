import { useRef, useCallback } from 'react'

function useSwipe({ swipeThreshold = 10, edgeThreshold = 35 } = {}) {
  const data = useRef({})
  const prevTimestamp = useRef(0)
  
  const onSwipeDown = useCallback(event => {
    const { clientX, clientY } = event
    const width = window.innerWidth
    const isLeft = clientX < edgeThreshold
    const isRight = clientX > width - edgeThreshold
    prevTimestamp.current = performance.now()
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
    const timestamp = performance.now()
    const deltaX = clientX - startX
    const deltaY = clientY - startY
    const absX = Math.abs(deltaX)
    const absY = Math.abs(deltaY)
    // Determine the dominant axis of the movement:
    if (!data.current.direction) {
      data.current.direction = absX > absY ? 'x' : 'y'
    }
    // Calculate scroll velocity
    const deltaTime = timestamp - prevTimestamp.current
    const rawVelocity =  data.current.direction === 'x' ? deltaX / deltaTime : deltaY / deltaTime

    // Formula: (currentRawVelocity * smoothingFactor) + (PreviousSmoothedVelocity * (1 - Factor))
    // (smoothingFactor: 0 < factor <= 1. Smaller = smoother.
    velocity = (rawVelocity * 0.05) + (velocity * (1 - 0.05))

    // Set prevTimestamp for use in next frame
    prevTimestamp.current = timestamp
    
    return { deltaX, deltaY, edge, direction: data.current.direction, velocity }
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
