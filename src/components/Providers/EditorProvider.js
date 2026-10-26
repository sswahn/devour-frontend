import { useState, createContext } from 'react'

const CaptionsContext = createContext(null)

function CaptionsProvider({ children }) {
  const [captions, setCaptions] = useState([])

  const createCaption = data => {
    setCaptions(prev => [ ...prev, data])
  }
  
  return (
    <CaptionsContext.Provider value={{ captions, createCaption }}>
      {children}
    </CaptionsContext.Provider>
  )
}

export { CaptionsContext, CaptionsProvider }
