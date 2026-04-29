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
    moved.current = false
  }

  
  const onPointerMove = event => {
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
    reset(currentTarget)
  }
  
  return (
    
  )
}

export default useDoubleTap
