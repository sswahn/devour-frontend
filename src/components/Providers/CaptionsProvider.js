import { useState, createContext, useEffect } from 'react'
import * as config from '../config'
import storage from '../utilities/storage'

const CaptionsContext = createContext(null)

function CaptionsProvider({ children }) {
  const [captions, setCaptions] = useState([])
  const [isHydrated, setIsHydrated] = useState(false)

  const createCaption = data => {
    setCaptions(prev => [ ...prev, data ])
  }
  
  const updateCaption = (id, data) => {
    
  }
  
  const deleteCaption = id => {
    
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
    <CaptionsContext.Provider value={{ captions, createCaption, updateCaption, deleteCaption }}>
      {children}
    </CaptionsContext.Provider>
  )
}

export { CaptionsContext, CaptionsProvider }
