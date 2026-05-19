import createObserver from '../../../utilities/observer'

function Sentinel({ setLoadMore }) {
  const { observe, unobserve, disconnect } = createObserver({ rootMargin = '64px' })
  
  const observerCallback = entry => { 
    if (entry.isIntersecting) {
      setLoadMore(true)
      unobserve(entry.target)
    }
  }

  const setObserver = node => {
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
      <div ref={setObserver} style={{ height: '64px' }} />
    </div>
  )
}

export default Sentinel
