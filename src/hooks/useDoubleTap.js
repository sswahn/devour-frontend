
function useDoubleTap() {


  const doubleTapOnUp = () => {
    const now = performance.now()
    const deltaT = now - lastTapTime.current
    if (deltaT > 0 && deltaT < doubleTapDelay) {
      setDoubleTap(now)
      lastTapTime.current = 0
    } else {
      setTap(now)
      lastTapTime.current = now
    }
  }
  
  return (
    
  )
}

export default useDoubleTap
