import { useState, useRef, useEffect } from 'react'

function useSwipeToClose() {
  const [overlay, setOverlay] = useState({
    element: null,
    method: null
  })
  const swipeData = useRef({ 
    startX: 0,
    startY: 0,
    activeSide: null,
    pointerId: null,
    direction: null
  })

  const reset = () => {
    overlay.element.style.transform = ''
    swipeData.current = { 
      startX: 0,
      startY: 0,
      activeSide: null,
      pointerId: null,
      direction: null
    }
  }

  const onPointerDown = event => {
    const { clientX, clientY, pointerId, currentTarget } = event
    const width = window.innerWidth
    const EDGE_THRESHOLD = 35
    // Only capture if actually hitting an edge
    const isLeft = clientX < EDGE_THRESHOLD
    const isRight = clientX > width - EDGE_THRESHOLD
    if (isLeft || isRight) {
      currentTarget.setPointerCapture(pointerId)
      swipeData.current = { 
        startX: clientX,
        startY: clientY,
        activeSide: isLeft ? 'left' : 'right',
        pointerId,
        direction: null
      }
    }
  }

  const onPointerMove = event => {
    const { startX, startY, activeSide, pointerId } = swipeData.current
    if (!activeSide || event.pointerId !== pointerId) {
      return
    }

    const deltaX = event.clientX - startX
    const deltaY = event.clientY - startY
    let direction = swipeData.current.direction
    
    if (!direction) {
      const LOCK_THRESHOLD = 8
  
      if (Math.abs(deltaX) < LOCK_THRESHOLD && Math.abs(deltaY) < LOCK_THRESHOLD) {
        return
      }
  
      direction = Math.abs(deltaX) > Math.abs(deltaY) ? 'x' : 'y'
    }

    if (direction === 'y') {
      reset()
      return
    }
    
    const translateX = activeSide === 'left' ? Math.max(0, deltaX) : Math.min(0, deltaX)
    overlay.element.style.transform = `translateX(${translateX}px)`
  }

  const onPointerUp = event => {
    const { startX, activeSide, pointerId } = swipeData.current
    if (!activeSide || event.pointerId !== pointerId) {
      return
    }
    const deltaX = event.clientX - startX
    const isCorrectDir = activeSide === 'left' ? deltaX > 0 : deltaX < 0
    const shouldClose = Math.abs(deltaX) > CLOSE_THRESHOLD && isCorrectDir
    const CLOSE_THRESHOLD = 150 

    if (event.currentTarget.hasPointerCapture(pointerId)) {
      event.currentTarget.releasePointerCapture(pointerId)
    }
    
    if (shouldClose) {
      overlay.method()
    }
    reset()
  }
  
  const onPointerCancel = event => {
    const { pointerId } = swipeData.current
    if (event.pointerId !== pointerId) {
      return
    }
    if (event.currentTarget.hasPointerCapture(pointerId)) {
      event.currentTarget.releasePointerCapture(pointerId)
    }
    reset()
  }
  
  useEffect(() => {
    if (!overlay.element || !overlay.method) {
      return
    }
    overlay.element.addEventListener('pointerup', onPointerUp)
    overlay.element.addEventListener('pointermove', onPointerMove)
    overlay.element.addEventListener('pointerdown', onPointerDown)
    overlay.element.addEventListener('pointercancel', onPointerCancel)
    return () => {
      overlay.element.removeEventListener('pointerup', onPointerUp)
      overlay.element.removeEventListener('pointerdown', onPointerDown)
      overlay.element.removeEventListener('pointercancel', onPointerCancel)
    }
  }, [overlay.element, overlay.method])

  return setOverlay
}

export default useSwipeToClose
