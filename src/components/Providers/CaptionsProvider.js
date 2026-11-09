import { useState, createContext } from 'react'

const CaptionsContext = createContext(null)

function CaptionsProvider({ children }) {
  const [captions, setCaptions] = useState([])

  const createCaptions = data => {
    setCaptions(prev => [ ...prev, data])
  }
  
  return (
    <CaptionsContext.Provider value={{ captions, createCaptions }}>
      {children}
    </CaptionsContext.Provider>
  )
}

export { CaptionsContext, CaptionsProvider }
