import createObserver from '../../utilities/observer'

function Sentinel({ setLoadMore }) {
  const { observe, unobserve, disconnect } = createObserver()
  
  const observerCallback = entry => { 
    const { target, isIntersecting } = entry
    if (isIntersecting) {
      setLoadMore(true)
      unobserve(target)
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
