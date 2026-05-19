import { useRef } from 'react'

function Sentinel({ loadMore }) {
  const observer = useRef(null)

  const sentinelRef = useCallback(node => {
    if (observer.current) { // Disconnect previous observer if it exists
      observer.current.disconnect()
    }
    if (!node || !hasMore) { // Do nothing if node is null (unmounted) or no more data to fetch
      return
    }
    observer.current = new IntersectionObserver(([entry]) => { // Create and connect new observer
      if (entry.isIntersecting) {
        onIntersect();
      }
    }, {
      rootMargin: '200px', // Fetch 200px before user hits bottom
  })
  // Clean up observer when 
  // component unmounts entirely
  
  useEffect(() => {
    return () => {
      if (observer.current) {
        observer.current.disconnect()
      }
    }
  }, [])
  
  return (
    <div>
    
      // Only render the DOM node if there is actually more data to fetch
      {hasMore ? <div ref={sentinelRef} style={{ height: '10px' }} /> : null}
    </div>
  )
}

export default Sentinel
