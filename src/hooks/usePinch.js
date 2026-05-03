import { useRef } from 'react'

const usePinch = () => {
  const pointers = useRef(new Map())
  const prevDistance = useRef(null)

  const getDistance = (p1, p2) => {
    return Math.hypot(p2.x - p1.x, p2.y - p1.y)
  }

  const onPinchDown = event => {
    const { pointerId, clientX, clientY, currentTarget } = event

    currentTarget.setPointerCapture(pointerId)

    pointers.current.set(pointerId, { x: clientX, y: clientY })

    return { isPinching: pointers.current.size === 2 }
  }

  const onPinchMove = event => {
    if (!pointers.current.has(event.pointerId)) return {}

    pointers.current.set(event.pointerId, {
      x: event.clientX,
      y: event.clientY
    })

    if (pointers.current.size !== 2) return {}

    const [p1, p2] = [...pointers.current.values()]
    const distance = getDistance(p1, p2)

    let scale = 1
    let direction = 'none'

    if (prevDistance.current != null) {
      scale = distance / prevDistance.current
      direction = scale > 1 ? 'out' : 'in'
    }

    prevDistance.current = distance

    return {
      isPinching: true,
      scale,
      direction
    }
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

/*
import { useRef } from 'react'

const usePinch = () => {
  const prevDistance = useRef(-1)
  const data = useRef([])

  // The browser fires a new pointerdown event for every finger that touches the screen
  const onPinchDown = event => {
    const { clientX, clientY, pointerId } = event
    const exists = data.current.find(p => p.id === pointerId) // 1. Prevent adding the same finger twice
    if (!exists) {
      data.current.push({ 
        startX: clientX, 
        startY: clientY,
        id: pointerId
      })
    }
    return { isPinching: data.current.length === 2 }
  }

  const onPinchMove = event => {
    if (data.current.length !== 2) { 
      return {}
    }
    const { clientX, clientY, pointerId } = event
    const [ first, second ] = data.current
    const isFirst = first.id === pointerId
    const p1 = isFirst ? { clientX, clientY } : first
    const p2 = isFirst ? second : { clientX, clientY }
    const distance = Math.hypot(p2.clientX - p1.clientX, p2.clientY - p1.clientY)
    let direction = 'none'
    let ratio = 1
    if (prevDistance.current > 0) {
      ratio = distance / prevDistance.current
      direction = ratio > 1 ? 'out' : 'in'
    }  
    prevDistance.current = distance
    return { isPinching: data.current.length === 2, pinch: direction }
  }

  const onPinchUp = event => {
    return { isPinching: data.current.length === 2 }
  }

  const onPinchCancel = event => {
    data.current = []
    prevDistance.current = -1
  }

  return {
    onPinchDown,
    onPinchMove,
    onPinchUp,
    onPinchCancel
  }
}

export default usePinch
*/
