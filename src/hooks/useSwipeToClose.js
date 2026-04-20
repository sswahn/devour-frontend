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
    console.log('onPointerDown fired!')
    
    const { clientX, pointerId, currentTarget } = event
    const width = window.innerWidth
    const EDGE_THRESHOLD = 30

 
    console.log('window.innerWidth: ', width)
    console.log('clientX: ', clientX)
    console.log('width - EDGE_THRESHOLD: ', width - EDGE_THRESHOLD)
    
    // Only capture if actually hitting an edge
    const isLeft = clientX < EDGE_THRESHOLD
    const isRight = clientX > width - EDGE_THRESHOLD

    console.log('isLeft: ', isLeft)
    console.log('isRight: ', isRight)
    
    if (isLeft || isRight) {
      currentTarget.setPointerCapture(pointerId)
      swipeData.current = { 
        startX: clientX, 
        activeSide: isLeft ? 'left' : 'right'
      }
    }
  }

  const onPointerUp = event => {
    console.log('onPointerUp fired! swipeData.current: ', swipeData.current)
    
    const { activeSide, startX } = swipeData.current
    if (!activeSide) {
      return
    }
    const deltaX = event.clientX - startX
    const isCorrectDir = activeSide === 'left' ? deltaX > 0 : deltaX < 0
    const CLOSE_THRESHOLD = 150 

    if (Math.abs(deltaX) > CLOSE_THRESHOLD && isCorrectDir) {
      
      console.log('overlay.method() fired! : ', overlay.method)
      
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
    console.log('event listeners being set:')
    
    overlay.element.addEventListener('pointerup', onPointerDown)
    overlay.element.addEventListener('pointerdown', onPointerUp)
    overlay.element.addEventListener('pointercancel', onPointerCancel)
    return () => {
      overlay.element.removeEventListener('pointerup', onPointerDown)
      overlay.element.removeEventListener('pointerdown', onPointerUp)
      overlay.element.removeEventListener('pointercancel', onPointerCancel)
    }
  }, [overlay.element])

  return setOverlay
}

export default swipeToClose
