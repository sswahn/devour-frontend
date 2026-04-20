import { useEffect } from 'react'

function swipeToClose() {

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
      action()
    }
    resetSwipeData()
  }
  
  const onPointerCancel = event => {
    resetSwipeData()
  }
  
  useEffect(() => {
    element.addEventListener('onPointerUp', methods.up)
    element.addEventListener('onPointerDown', methods.down)
    element.addEventListener('onPointerCancel', methods.cancel)
    return () => {
      
    }
  }, [])

  
}

export default swipeToClose
