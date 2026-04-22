import { useState, useRef } from 'react'

function useDoubleTap() {
  const [doubleTap, setDoubleTap] = useState(0)
  const lastTapTime = useRef(0)
  const moved = useRef(false)
  
  const doubleTapOnUp = () => {
    const doubleTapDelay = 300
    const now = performance.now()
    const deltaT = now - lastTapTime.current
    if (deltaT > 0 && deltaT < doubleTapDelay) {
      setDoubleTap(now)
      lastTapTime.current = 0
    } else {
      lastTapTime.current = now
    }
  }

  const reset = currentTarget => {
    const { id } = data.current
    if (id && currentTarget.hasPointerCapture(id)) {
      currentTarget.releasePointerCapture(id)
    }
    moved.current = false
  }

  const onPointerDown = event => {
    const { currentTarget, pointerId } = event
    currentTarget.setPointerCapture(pointerId)
  }
  
  const onPointerMove = event => {
    const { clientX, clientY, currentTarget, pointerId } = event
    const { id } = data.current
    if (id && pointerId !== id) {
      return
    }
    const moveThreshold = 10
    const deltaX = clientX - startX
    const deltaY = clientY - startY
    const absDeltaX = Math.abs(deltaX)
    const absDeltaY = Math.abs(deltaY)
    
    if (absDeltaX > moveThreshold || absDeltaY > moveThreshold) {
      moved.current = true
    }
  }
  
  const onPointerUp = event => {
    const { clientX, pointerId, currentTarget } = event
    const { id } = data.current
    if (id && pointerId !== id) {
      return
    }
    if(!moved.current) {
      doubleTapOnUp()
    }
    reset(currentTarget)
  }
  
  const onPointerCancel = event => {
    const { pointerId, currentTarget } = event
    const { id } = data.current
    if (id && pointerId !== id) {
      return
    }
    reset(currentTarget)
  }
  
  return (
    
  )
}

export default useDoubleTap
