import { useState, createContext, useEffect } from 'react'
import * as config from '../../config'
import database from '../../utilities/database'

const FootageContext = createContext(null)

function FootageProvider({ children }) {
  const [footage, setFootage] = useState([])
  const [isHydrated, setIsHydrated] = useState(false)

  // create crud functions instead of exposing setFootage, then you can typecheck/error handle

  useEffect(() => {
    const hydrate = async () => {
      const data = await database().get(config.storage.footage)
      if (data?.footage.length > 0) {
        setFootage(data.footage)
        setIsHydrated(true)
      }
    }
    hydrate()
  }, [])
  
  useEffect(() => {
    if (!isHydrated) {
      return
    }
    database().put({ id: config.storage.footage, footage })
  }, [footage, isHydrated])
  
  return (
    <FootageContext.Provider value={{ footage, setFootage }}>
      {children}
    </FootageContext.Provider>
  )
}

export { FootageContext, FootageProvider }
