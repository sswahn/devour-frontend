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
    console.log('Hook useEffect fired')
    console.log('element: ', overlay.element)
    console.log('method: ', overlay.method)
    
    if (!overlay.element || !overlay.method) {
      return
    }

    console.log('IN hook useEffect condition')
    console.log('element: ', overlay.element)
    console.log('method: ', overlay.method)
    console.log('event listeners being set:')
    
    overlay.element.addEventListener('pointerup', onPointerDown)
    overlay.element.addEventListener('pointerdown', onPointerUp)
    overlay.element.addEventListener('pointercancel', onPointerCancel)
    return () => {
      overlay.element.removeEventListener('pointerup', onPointerDown)
      overlay.element.removeEventListener('pointerdown', onPointerUp)
      overlay.element.removeEventListener('pointercancel', onPointerCancel)
    }
  }, [overlay])

  return setOverlay
}

export default swipeToClose
