import { useState, useRef, useEffect } from 'react'

function useSwipe() {
  const data = useRef({
    startX: null,
    startY: null,
  })

  const reset = currentTarget => {
    const { id } = data.current
    if (currentTarget.hasPointerCapture(id)) {
      currentTarget.releasePointerCapture(id)
    }
    data.current = {}
  }
  
  const onSwipeDown = event => {
    const { clientX, clientY } = event
    data.current = {
      startX: clientX,
      startY: clientY,
    }
  }
  
  const onSwipeMove = event => {
    if (!data.current) {
      return
    }
    const { clientX, clientY } = event
    const { startX, startY } = data.current
    const deltaX = clientX - startX
    const deltaY = clientY - startY
    const absX = Math.abs(deltaX)
    const absY = Math.abs(deltaY)


    
  }
  
  const onSwipeUp = event => {
    if (!data.current) {
      return
    }
  }
  
  const onSwipeCancel = event => {
    if (!data.current) {
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
