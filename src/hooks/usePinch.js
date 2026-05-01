import { useRef } from 'react'

const usePinch = () => {
  const prevDistance = useRef(-1)
  const data = useRef([])

  // The browser fires a new pointerdown event for every finger that touches the screen

  const onPinchDown = event => {
    const { clientX, clientY, pointerId } = event
    const exists = data.current.find(p => p.id === pointerId) // 1. Prevent adding the same finger twice

    console.log('checking .find if pointer exists: ', exists)
    
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
    const isFirst = first.pointerId === pointerId
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
    return { pinch: direction }
  }

  const onPinchUp = event => {

  }

  const onPinchCancel = event => {
    data.current = []
    pinchDistance.current = -1
  }

  return {
    onPinchDown,
    onPinchMove,
    onPinchUp,
    onPinchCancel
  }
}

export default usePinch
