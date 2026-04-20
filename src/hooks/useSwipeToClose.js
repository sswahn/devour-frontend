import { useState, useRef, useEffect } from 'react'

function swipeToClose() {
  const [element, setElement] = useState(null)
  const [method, setMethod] = useState(null)
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
      method()
    }
    resetSwipeData()
  }
  
  const onPointerCancel = event => {
    resetSwipeData()
  }
  
  useEffect(() => {
    if (!element || !method) {
      return
    }
    
    console.log('element: ', element)
    console.log('method: ', method)
    console.log('event listeners being set:')
    
    element.addEventListener('pointerup', onPointerDown)
    element.addEventListener('pointerdown', onPointerUp)
    element.addEventListener('pointercancel', onPointerCancel)
    return () => {
      element.removeEventListener('pointerup', onPointerDown)
      element.removeEventListener('pointerdown', onPointerUp)
      element.removeEventListener('pointercancel', onPointerCancel)
    }
  }, [element, method])

  return [setElement, setMethod]
}

export default swipeToClose
