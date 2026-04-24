import { useState, useRef, useEffect } from 'react'

function useSwipe() {
  const swipeData = useRef({ 
    startX: 0,
    startY: 0,
    activeSide: null,
    pointerId: null,
    direction: null
  })
  const onSwipeDown = event => {
    
  }
  
  const onSwipeMove = event => {
    
  }
  
  const onSwipeUp = event => {
    
  }
  
  const onSwipeCancel = event => {
    
  }

  return {
    onSwipeDown,
    onSwipeMove,
    onSwipeUp,
    onSwipeCancel
  }
}

export default useSwipe
