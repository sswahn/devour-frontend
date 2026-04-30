import { useRef } from 'react'

const usePinch = () => {
  const prevDistance = useRef(-1)
  const data = useRef([])

  // Because the browser fires a new onpointerdown for every finger that touches the screen, your code collects them one by one.

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
    let delta = 0
    if (prevDistance.current > 0) {
      ratio = distance / prevDistance.current
      direction = ratio > 1 ? 'out' : 'in'
      delta = distance - prevDistance.current
    }  
    prevDistance.current = distance
    return { pinchDirection: direction }
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
