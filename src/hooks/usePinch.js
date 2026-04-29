import { useState, useRef, useCallback } from 'react'

const usePinch = () => {
  const isPinching = useRef(false)
  const data = useRef([]) // Map of pointerId -> { clientX, clientY }
  const prevDistance = useRef(-1)

  // Because the browser fires a new onpointerdown for every finger that touches the screen, your code collects them one by one.

  const onPointerDown = event => {
    const { clientX, clientY, pointerId } = event
    const exists = data.current.find(p => p.id === pointerId) // 1. Prevent adding the same finger twice
    if (!exists) {
      data.current.push({ 
        startX: clientX, 
        startY: clientY,
        id: pointerId
      })
    }
  }

  const onPointerMove = event => {
    const { clientX, clientY, pointerId } = event
    const [ first, second ] = data.current
    if (data.current.length !== 2) { 
      return {}
    }
    const deltaX = startX - clientX
    const deltaY = startY - clientY
    const distance = Math.hypot(deltaX, deltaY)
    let direction = 'none'
    let ratio = 1
    let delta = 0

    if (prevDistance.current > 0) {
      ratio = distance / prevDistance.current
      direction = ratio > 1 ? 'out' : 'in'
      delta = currentDistance - prevDistance.current
    }  
    prevDistance.current = distance
  
    return { distance, ratio, direction, delta }
  }

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
