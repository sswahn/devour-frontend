import { useState, useEffect, createContext } from 'react'

const FullScreenContext = createContext(null)

function FullscreenProvider({ children }) {
  const [isFullscreen, setFullscreen] = useState(false)

  const onFullscreenChange = event => {
    setState(!!document.fullscreenElement)
  }

  useEffect(() => {
    document.addEventListener('fullscreenchange', onFullscreenChange)
    return () => {
      document.removeEventListener('fullscreenchange', onFullscreenChange)
    }
  }, [])
  
  return (
    <FullScreenContext.Provider value={isFullscreen}>
      {children}
    </FullScreenContext.Provider>
  )
}

export { FullscreenContext, FullScreenProvider }
