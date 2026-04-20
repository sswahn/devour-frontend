import { useRef, useEffect } from 'react'

function swipeToClose() {
  const elementRef = useRef(null)
  const methodRef = useRef(null)
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
      method.current()
    }
    resetSwipeData()
  }
  
  const onPointerCancel = event => {
    resetSwipeData()
  }
  
  useEffect(() => {
    if (!elementRef.current) {
      return
    }
    elementRef.current.addEventListener('pointerup', onPointerDown)
    elementRef.current.addEventListener('pointerdown', onPointerUp)
    elementRef.current.addEventListener('pointercancel', onPointerCancel)
    return () => {
      elementRef.current.removeEventListener('pointerup', onPointerDown)
      elementRef.current.removeEventListener('pointerdown', onPointerUp)
      elementRef.current.removeEventListener('pointercancel', onPointerCancel)
    }
  }, [])

  const setElement = element => {
    elementRef.current = element
  }
  
  const setMethod = method => {
    method.current = method
  }

  return [setElement, setMethod]
}

export default swipeToClose
