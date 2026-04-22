import { useState, useRef } from 'react'

function useLongPress() {
  const [longPress, setLongPress] = useState(0)
  const timer = useRef(null)

  const reset = currentTarget => {
    const { id } = data.current
    if (id && currentTarget.hasPointerCapture(id)) {
      currentTarget.releasePointerCapture(id)
    }
  }

  const longPressCancel = () => {
    if (timer.current) { 
      clearTimeout(timer.current)
      timer.current = null
    }
  }

  const longPressOnDown = currentTarget => {
    const longPressDelay = 500
    longPressFired.current = false
    timer.current = setTimeout(() => {
      longPressFired.current = true
      setLongPress(performance.now())
      longPressCancel()
    }, longPressDelay)
  }
  
  const onPointerDown = event => {
    const { currentTarget, pointerId } = event
    currentTarget.setPointerCapture(pointerId)
    longPressOnDown(currentTarget)
  }
  
  const onPointerMove = event => {
    const { clientX, clientY, pointerId } = event
    const { startX, startY, id } = data.current
    if (id && pointerId !== id) {
      return
    }
    const moveThreshold = 10
    const deltaX = clientX - startX
    const deltaY = clientY - startY
    const absDeltaX = Math.abs(deltaX)
    const absDeltaY = Math.abs(deltaY)
    
    if (absDeltaX > moveThreshold || absDeltaY > moveThreshold) {
      longPressCancel()
    }
  }
  
  const onPointerUp = event => {
    longPressCancel()
    const { pointerId, currentTarget } = event
    const { id } = data.current
    if (id && pointerId !== id) {
      return
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

export default useLongPress
