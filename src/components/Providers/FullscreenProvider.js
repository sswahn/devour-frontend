import { useState, createContext } from 'react'

const FullScreenContext = createContext(null)

function FullscreenProvider({ children }) {
  const [isFullscreen, setFullscreen] = useState()
  
  return (
    <FullScreenContext.Provider value={isFullscreen}>
      {children}
    </FullScreenContext.Provider>
  )
}

export { FullscreenContext, FullScreenProvider }
