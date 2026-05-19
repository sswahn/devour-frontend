import { useRef } from 'react'
import createObserver from '../../utilities/observer'

function Sentinel({ setLoadMore }) {
  const { observe, unobserve, disconnect } = createObserver()
  const observer = useRef(null)

  const observerCallback = entry => { 
    if (entry.isIntersecting) {
      setLoadMore(true)
      unobserve(node)
    }
  }

  const setObserver = node => { // gets passed into ref={setObserver}
    if (node) {
      observe(node, observerCallback)
    }
  }

  useEffect(() => {
    return () => {
      disconnect()
    }
  }, [])

  
  return (
    <div>
      {!loadMore && <div ref={setObserver} style={{ height: '64px' }} />}
    </div>
  )
}

export default Sentinel
