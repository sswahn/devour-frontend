import { useState, createContext, useEffect } from 'react'
import * as config from '../config'
import storage from '../utilities/storage'

const CaptionsContext = createContext(null)

function CaptionsProvider({ children }) {
  const [captions, setCaptions] = useState([])
  const [isHydrated, setIsHydrated] = useState(false)

  const createCaptions = data => {
    setCaptions(prev => [ ...prev, Array.isArray(data) ? ...data : data ])
  }

  useEffect(() => {
    const stored = storage.local.get(config.storage.captions) ?? []
    setCaptions(stored)
    setIsHydrated(true)
  }, [])
  
  useEffect(() => {
    if (!isHydrated) {
      return
    }
    storage.local.set(config.storage.captions, captions)
  }, [captions, isHydrated])
  
  return (
    <CaptionsContext.Provider value={{ captions, createCaptions }}>
      {children}
    </CaptionsContext.Provider>
  )
}

export { CaptionsContext, CaptionsProvider }
