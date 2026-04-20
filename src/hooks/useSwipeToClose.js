import { useEffect } from 'react'

function useGestures() {

  const swipeToClose = (element, methods) => {
    
  }


  
  useEffect(() => {
    element.addEventListener('onPointerUp', methods.up)
    element.addEventListener('onPointerDown', methods.down)
    element.addEventListener('onPointerCancel', methods.cancel)
    return () => {
      
    }
  }, [])

  return {
    swipeToClose
  }
}

export default useGestures
