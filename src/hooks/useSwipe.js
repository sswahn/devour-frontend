import { useState, useRef } from 'react'

function useSwipe() {
  const [swipe, setSwipe] = useState({})
  const data = useRef({})

  const reset = currentTarget => {
    const { id } = data.current
    if (id && currentTarget.hasPointerCapture(id)) {
      currentTarget.releasePointerCapture(id)
    }
    data.current = {}
  }

  const edgeSwipeOnMove = (activeSide, deltaX, deltaY, currentTarget) => {
    if (!activeSide) {
      return
    }
    const absDeltaX = Math.abs(deltaX)
    const absDeltaY = Math.abs(deltaY)
    
    // Get direction, if vertical (y) reset 
    if (!data.current.direction) {
      const LOCK_THRESHOLD = 8
      if (absDeltaX < LOCK_THRESHOLD && absDeltaY < LOCK_THRESHOLD) {
        return
      }
      data.current.direction = absDeltaX > absDeltaY ? 'x' : 'y'
    }
    if (data.current.direction === 'y') {
      return reset(currentTarget)
    }
    // if horizontal, perform side swipe
    const raw = activeSide === 'left' ? Math.max(0, deltaX) : Math.min(0, deltaX)
    const resistance = raw / (1 + Math.abs(raw) / 300)
    setEdgeSwipe(prev => ({ ...prev, delta: resistance }))
  }

  const edgeSwipeOnUp = (clientX, startX, activeSide) => {
    const deltaX = clientX - startX
    const isCorrectDir = activeSide === 'left' ? deltaX > 0 : deltaX < 0
    const shouldClose = Math.abs(deltaX) > closeThreshold && isCorrectDir
    setEdgeSwipe(prev => ({ ...prev, shouldClose: shouldClose ? performance.now() : 0 }))
  }
  
  const onPointerDown = event => {
    const { clientX, clientY, currentTarget, pointerId, button } = event

    const width = window.innerWidth
    const edgeLeft = clientX < edgeThreshold
    const edgeRight = clientX > width - edgeThreshold
    let swipeSide = undefined
    if (edgeLeft || edgeRight) {
      swipeSide = edgeLeft ? 'left' : 'right'
    }
    data.current = { 
      startX: clientX, 
      startY: clientY,
      id: pointerId,
      direction: null,
      activeSide: swipeSide
    }
    currentTarget.setPointerCapture(pointerId)
  }
  
  const onPointerMove = event => {
    
  }
  
  const onPointerUp = event => {
    
  }
  
  const onPointerCancel = event => {
    
  }

  return {
    
  }
}
