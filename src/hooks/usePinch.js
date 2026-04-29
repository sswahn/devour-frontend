import { useState, useRef, useCallback } from 'react'

const usePinch = () => {
  const isPinching = useRef(false)
  const data = useRef({}) // Map of pointerId -> { clientX, clientY }
  const prevDiff = useRef(-1)

  const onPointerDown = event => {
    const { clientX, clientY, pointerId } = event
    data.current[pointerId] = { clientX, clientY }
    const activePointers = Object.keys(data.current).length
    if (activePointers === 2) {
      isPinching.current = true
    }
  }, [])

  const onPointerMove = event => {
    if (!isPinching.current) {
      return
    }
    const { clientX, clientY, pointerId } = event

    data.current[pointerId] = { clientX, clientY }
    const pointers = Object.values(data.current)
    
    let ratio = 1
    let direction = 'none'
    let distance = 0

    if (pointers.length === 2) {
      distance = Math.hypot(
        pointers[0].clientX - pointers[1].clientX,
        pointers[0].clientY - pointers[1].clientY
      )

      if (prevDiff.current > 0) {
        ratio = distance / prevDiff.current
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
