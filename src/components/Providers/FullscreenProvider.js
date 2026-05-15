import { useState, useEffect, createContext } from 'react'

const FullscreenContext = createContext(null)

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
    <FullscreenContext.Provider value={{ isFullscreen }}>
      {children}
    </FullscreenContext.Provider>
  )
}

export { FullscreenContext, FullscreenProvider }
