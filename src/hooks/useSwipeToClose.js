import { useState, useRef, useEffect } from 'react'

function swipeToClose() {
  const [overlay, setOverlay] = useState({
    element: null,
    method: null
  })
  const swipeData = useRef({ 
    startX: 0, 
    activeSide: null 
  })

  const resetSwipeData = () => {
    swipeData.current = { 
      startX: 0, 
      activeSide: null
    }
  }

  const onPointerDown = event => {
    const { clientX, pointerId, currentTarget } = event
    const width = window.innerWidth
    const EDGE_THRESHOLD = 30
    // Only capture if actually hitting an edge
    const isLeft = clientX < EDGE_THRESHOLD
    const isRight = clientX > width - EDGE_THRESHOLD
    if (isLeft || isRight) {
      currentTarget.setPointerCapture(pointerId)
      swipeData.current = { 
        startX: clientX, 
        activeSide: isLeft ? 'left' : 'right'
      }
    }
  }

  const onPointerMove = event => {
    if (!swipeData.current.activeSide) {
      return
    }
    // optional: live feedback, prevent scroll, etc.
  }

  const onPointerUp = event => {
    const { activeSide, startX } = swipeData.current
    if (!activeSide) {
      return
    }
    const deltaX = event.clientX - startX
    const isCorrectDir = activeSide === 'left' ? deltaX > 0 : deltaX < 0
    const CLOSE_THRESHOLD = 150 
    if (Math.abs(deltaX) > CLOSE_THRESHOLD && isCorrectDir) {
      overlay.method()
    }
    resetSwipeData()
  }
  
  const onPointerCancel = event => {
    resetSwipeData()
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
  }, [overlay.element])

  return setOverlay
}

export default swipeToClose
