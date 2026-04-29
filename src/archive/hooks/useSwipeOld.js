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
    const { clientX, clientY, currentTarget, pointerId } = event
    const { startX, startY, activeSide, id } = data.current
    if (pointerId !== id || !activeSide) {
      return
    }
    const deltaX = clientX - startX
    const deltaY = clientY - startY
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

    return resistance
    // swipe delta + resistance provided 
    //setEdgeSwipe(prev => ({ ...prev, delta: resistance }))
  }
  
  const onPointerUp = event => {
    const { clientX, pointerId, currentTarget } = event
    const { startX, activeSide, id, direction } = data.current
    if (pointerId !== id || !activeSide) {
      return
    }
    const deltaX = clientX - startX
    const isCorrectDir = activeSide === 'left' ? deltaX > 0 : deltaX < 0
    const swipeThresholdMet = Math.abs(deltaX) > swipeThreshold && isCorrectDir
    // if threshold met execute code
    if (swipeThresholdMet) {
      return true
    } else {
      reset(currentTarget)
      return false
    }
  }
  
  const onPointerCancel = event => {
    const { pointerId, currentTarget } = event
    const { id } = data.current
    if (id && pointerId !== id) {
      return
    }
    reset(currentTarget)
  }

  return {
    swipe,
    handlers: {
      onPointerDown,
      onPointerMove,
      onPointerUp,
      onPointerCancel
    }
  }
}
