import { useState, createContext, useEffect } from 'react'
import * as config from '../config'
import storage from '../utilities/storage'

const CaptionsContext = createContext(null)

function CaptionsProvider({ children }) {
  const [captions, setCaptions] = useState([])
  const [isHydrated, setIsHydrated] = useState(false)

  const createCaption = data => {
    if (typeof data !== 'object' || data === null || Array.isArray(data)) {
      throw new TypeError('createCaption: data argument must be an object.')
    }
    setCaptions(prev => [ ...prev, data ])
  }
  
  const updateCaption = (id, data) => {
    if (typeof id !== 'string') {
      throw new TypeError('updateCaption: first argument must be a string')
    }
    if (typeof data !== 'object' || data === null || Array.isArray(data)) {
      throw new TypeError('updateCaption: second argument must be an object.')
    }
    setCaptions(prev => prev.map(caption =>
      caption.id === id ? data : caption
    ))
  }
  
  const deleteCaption = id => {
    if (typeof id !== 'string') {
      throw new TypeError('deleteCaption: first argument must be a string')
    }
    setCaptions(prev => prev.filter(caption =>
      caption.id !== id 
    ))
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
