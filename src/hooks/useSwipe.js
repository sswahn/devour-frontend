import { useRef, useCallback } from 'react'

function useSwipe({ swipeThreshold = 10, edgeThreshold = 35 } = {}) {
  const data = useRef({})
  const prevTimestamp = useRef(0)
  const finalVelocity = useRef(0)
  
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
    const { startX, startY, edge, direction } = data.current
    const timestamp = performance.now()
    const deltaX = clientX - startX
    const deltaY = clientY - startY
    const absX = Math.abs(deltaX)
    const absY = Math.abs(deltaY)
    // Determine the dominant axis of the movement:
    if (!direction) {
      data.current.direction = absX > absY ? 'x' : 'y'
    }
    // Calculate scroll velocity
    const deltaTime = timestamp - prevTimestamp.current
    const velocity =  data.current.direction === 'x' 
      ? deltaX / deltaTime 
      : deltaY / deltaTime
    prevTimestamp.current = timestamp
    finalVelocity.current = velocity
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
    return { deltaX, deltaY, edge, direction, velocity: finalVelocity.current }
  }, [])
  
  const onSwipeCancel = useCallback(event => {
    data.current = {}
    prevTimestamp.current = 0
    finalVelocity.current = 0
  }, [])

  return {
    onSwipeDown,
    onSwipeMove,
    onSwipeUp,
    onSwipeCancel
  }
}

export default useSwipe
