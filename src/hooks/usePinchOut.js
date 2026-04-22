import { useState, useRef, useCallback } from 'react'

const usePinchOut = (onPinchOut) => {
  const [isPinching, setIsPinching] = useState(false)
  const evCache = useRef([])
  const prevDiff = useRef(-1)

  const onPointerDown = useCallback((e) => {
    evCache.current.push(e)
    if (evCache.current.length === 2) setIsPinching(true)
  }, [])

  const onPointerMove = useCallback((e) => {
    const index = evCache.current.findIndex((ev) => ev.pointerId === e.pointerId)
    if (index === -1) return
    evCache.current[index] = e

    if (evCache.current.length === 2) {
      // Calculate current distance between two pointers
      const curDiff = Math.hypot(
        evCache.current[0].clientX - evCache.current[1].clientX,
        evCache.current[0].clientY - evCache.current[1].clientY
      )

      if (prevDiff.current > 0 && curDiff > prevDiff.current) {
        // Distance is increasing: Pinch Out / Zoom In
        if (onPinchOut) onPinchOut(curDiff / prevDiff.current)
      }
      prevDiff.current = curDiff
    }
  }, [onPinchOut])

  const onPointerUp = useCallback((e) => {
    evCache.current = evCache.current.filter((ev) => ev.pointerId !== e.pointerId)
    if (evCache.current.length < 2) {
      prevDiff.current = -1
      setIsPinching(false)
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

export default usePinchOut
