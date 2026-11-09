import { useState, createContext, useEffect } from 'react'

const FootageContext = createContext(null)

function FootageProvider({ children }) {
  const [footage, setFootage] = useState([])
  const [isHydrated, setIsHydrated] = useState(false)


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
    <FootageContext.Provider value={{ footage, setFootage }}>
      {children}
    </FootageContext.Provider>
  )
}

export { FootageContext, FootageProvider }
