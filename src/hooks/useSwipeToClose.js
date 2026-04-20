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

  const swipeToClose = (element, method) => {
    setOverlay(prev => ({ ...prev, element, method }))
  }

  const reset = () => {
    if (overlay.element) {
      overlay.element.style.transition = 'transform 0.2s ease'
      overlay.element.style.transform = ''
    }
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
    const EDGE_THRESHOLD = 35
    const width = window.innerWidth
    // Only capture if actually hitting an edge
    const isLeft = clientX < EDGE_THRESHOLD
    const isRight = clientX > width - EDGE_THRESHOLD
    if (isLeft || isRight) {
      currentTarget.setPointerCapture(pointerId)
      overlay.element.style.transition = 'none' // disable snap during drag
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

    if (!swipeData.current.direction) {
      const LOCK_THRESHOLD = 8
      if (Math.abs(deltaX) < LOCK_THRESHOLD && Math.abs(deltaY) < LOCK_THRESHOLD) {
        return
      }
      swipeData.current.direction = Math.abs(deltaX) > Math.abs(deltaY) ? 'x' : 'y'
    }

    if (swipeData.current.direction === 'y') {
      reset()
      return
    }

    const raw = activeSide === 'left' ? Math.max(0, deltaX) : Math.min(0, deltaX)
    const resisted = raw / (1 + Math.abs(raw) / 300)
  
    overlay.element.style.transform = `translateX(${resisted}px)`
  }

  const onPointerUp = event => {
    const { startX, activeSide, pointerId } = swipeData.current
    if (!activeSide || event.pointerId !== pointerId) {
      return
    }
    const CLOSE_THRESHOLD = 150 
    const deltaX = event.clientX - startX
    const isCorrectDir = activeSide === 'left' ? deltaX > 0 : deltaX < 0
    const shouldClose = Math.abs(deltaX) > CLOSE_THRESHOLD && isCorrectDir
    
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
    const element = overlay.element
    element.style.willChange = 'transform'
    element.addEventListener('pointerup', onPointerUp)
    element.addEventListener('pointermove', onPointerMove)
    element.addEventListener('pointerdown', onPointerDown)
    element.addEventListener('pointercancel', onPointerCancel)
    return () => {
      element.style.willChange = ''
      element.removeEventListener('pointerup', onPointerUp)
      element.removeEventListener('pointermove', onPointerMove)
      element.removeEventListener('pointerdown', onPointerDown)
      element.removeEventListener('pointercancel', onPointerCancel)
    }
  }, [overlay.element, overlay.method])

  return swipeToClose
}

export default useSwipeToClose
