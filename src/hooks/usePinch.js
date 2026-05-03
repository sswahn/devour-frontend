import { useRef } from 'react'

function usePinch() {
  const pointers = useRef(new Map())
  const prevDistance = useRef(null)

  const getDistance = (p1, p2) => {
    return Math.hypot(p2.x - p1.x, p2.y - p1.y)
  }

  const onPinchDown = event => {
    const { clientX, clientY, pointerId } = event

    pointers.current.set(pointerId, { x: clientX, y: clientY })

    return { isPinching: pointers.current.size === 2 }
  }

  const onPinchMove = event => {
    const { pointerId } = event
    if (!pointers.current.has(pointerId)) {
      return {}
    }

    pointers.current.set(pointerId, {
      x: event.clientX,
      y: event.clientY
    })

    if (pointers.current.size !== 2) {
      return {}
    }
    
    const [p1, p2] = [...pointers.current.values()]
    const distance = getDistance(p1, p2)
    let direction = 'none'
    let scale = 1
    
    if (prevDistance.current !== null) {
      scale = distance / prevDistance.current
      direction = scale > 1 ? 'out' : 'in'
    }
    prevDistance.current = distance

    return { isPinching: true, scale, direction }
  }

  const onPinchUp = event => {
    pointers.current.delete(event.pointerId)

    if (pointers.current.size < 2) {
      prevDistance.current = null
    }

    return { isPinching: pointers.current.size === 2 }
  }

  const onPinchCancel = () => {
    pointers.current.clear()
    prevDistance.current = null
  }

  return {
    onPinchDown,
    onPinchMove,
    onPinchUp,
    onPinchCancel
  }
}

export default usePinch
