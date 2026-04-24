import { useState, useRef, useEffect } from 'react'

function useSwipe() {
  const data = useRef({ 
    startX: 0,
    startY: 0,
    activeSide: null,
    pointerId: null,
    direction: null
  })

  const reset = currentTarget => {
    const { id } = data.current
    if (currentTarget.hasPointerCapture(id)) {
      currentTarget.releasePointerCapture(id)
    }
    data.current = {}
  }
  
  const onSwipeDown = event => {
    const { clientX, clientY, pointerId } = event
    data.current = {
      startX: clientX,
      startY: clientY,
      id: pointerId,
    }
    currentTarget.setPointerCapture(pointerId)
  }
  
  const onSwipeMove = event => {
    if (id !== pointerId) { 
      return
    }
  }
  
  const onSwipeUp = event => {
    if (id !== pointerId) { 
      return
    }
  }
  
  const onSwipeCancel = event => {
    if (id !== pointerId) { 
      return
    }
  }

  return {
    onSwipeDown,
    onSwipeMove,
    onSwipeUp,
    onSwipeCancel
  }
}

export default useSwipe
