import { useState, createContext } from 'react'

const OverlayContext = createContext(null)

function OverlayProvider({ children }) {
  const [isActive, setIsActive] = useState(undefined)

  const openOverlay = id => {
    setIsActive(id)
  } 
  
  const closeOverlay = () => {
    setIsActive(undefined)
  }

    // create an overlays provider
  // all this goes into it
  // components can pull open overlay and close overlay from it
  // it can use Seperate context providers to avoid rerenders
  // it can use separate hooks to avoid rerenders useOpenOverlay, useCloseOverlay
  // no more prop drilling for overlay controls.
  // all these functions/logic goes away, and into the provider.
  // profile issue then solved as:
  // in avatar openOverlay(id), setProfileUser(username) (not sure where setProileUser comes from...)


  return (
    <OverlayContext.Provider value={{ state, setState }}>
      {children}
    </OverlayContext.Provider>
  )
}

export { OverlayContext, OverlayProvider }
