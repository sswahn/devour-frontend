import { useRef } from 'react'

function useLongPress() {
  const timer = useRef(null)

  const longPressCancel = () => {
    if (timer.current) { 
      clearTimeout(timer.current)
      timer.current = null
    }
  }

  const onLongPressDown = callback => {
    timer.current = setTimeout(() => {
      callback()
      longPressCancel()
    }, 500)
  }
  
  const onLongPressMove = (absX, absY) => {
    const moveThreshold = 10
    if (absX > moveThreshold || absY > moveThreshold) {
      longPressCancel()
    }
  }
  
  const onLongPressUp = event => {
    longPressCancel()
  }
  
  const onLongPressCancel = event => {
    longPressCancel()
  }
  
  return {
    onLongPressDown,
    onLongPressMove,
    onLongPressUp,
    onLongPressCancel
  }
}

export default useLongPress
