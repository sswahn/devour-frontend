import { useState, createContext, useRef, useEffect } from 'react'
import * as config from '../config'
import storage from '../utilities/storage'

const CaptionsContext = createContext(null)

function CaptionsProvider({ children }) {
  const [captions, setCaptions] = useState([])
  const [isHydrated, setIsHydrated] = useState(false)
  const hasLoaded = useRef(false)

  const createCaptions = data => {
    
    setCaptions(prev => [ ...prev, Array.isArray(data) ? ...data : data ])
  }

  useEffect(() => {
    if (hasLoaded.current) {
      return
    }
    hasLoaded.current = true
    const stored = storage.local.get(config.storage.captions) ?? []
    createCaptions(stored)
    setIsHydrated(true)
  }, [createCaptions])
  
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
