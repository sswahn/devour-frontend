import { useState, useRef, useCallback } from 'react'

const usePinch = () => {
  const isPinching = useRef(false)
  const data = useRef([]) // Map of pointerId -> { clientX, clientY }
  const prevDelta = useRef(-1)

  /*
  const onPointerDown = event => {
    const { clientX, clientY, pointerId } = event
    data.current[pointerId] = { clientX, clientY }
    const activePointers = Object.keys(data.current).length
    if (activePointers === 2) {
      isPinching.current = true
    }
  }, [])
  */

  // Because the browser fires a new onpointerdown for every finger that touches the screen, your code collects them one by one.

  const onPointerDown = event => {
    const { clientX, clientY, pointerId } = event
    data.current.push({ 
      startX: clientX, 
      startY: clientY,
      id: pointerId
    })
  }

  const onPointerMove = event => {
    const { clientX, clientY, pointerId } = event
    const { startX, startY, id } = data.current

    if (data.current.length < 2) { 
      return {}
    }
    
    let ratio = 1
    let direction = 'none'
    let distance = 0

    const deltaX = startX - clientX
    const deltaY = startY - clientY

    // Distance between pointers:
    const distance = Math.hypot(deltaX, deltaY)

      if (prevDiff.current > 0) {
        ratio = distance / prevDelta.current
        direction = ratio > 1 ? 'out' : 'in'
      }
    
      prevDiff.current = distance
    }

    return {
      type: 'move',
      activePointers: pointers.length,
      isPinching: pointers.length === 2,
      distance,
      ratio,
      direction,
      delta: distance - (prevDiff.current || distance)
    }
  }, [])

  const onPointerUp = useCallback((e) => {
    delete data.current[e.pointerId]
    const activePointers = Object.keys(data.current).length

    if (activePointers < 2) {
      prevDiff.current = -1
      setIsPinching(false)
    }

    return {
      type: 'up',
      activePointers,
      isPinching: false
    }
  }, [])

  return {
    isPinching,
    pointerHandlers: {
      onPointerDown,
      onPointerMove,
      onPointerUp,
      onPointerCancel: onPointerUp,
      onPointerLeave: onPointerUp,
    },
  }
}

export default usePinch
