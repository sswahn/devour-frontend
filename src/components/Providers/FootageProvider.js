import { useState, createContext, useEffect } from 'react'
import * as config from '../config'
import database from '../utilities/database'

const FootageContext = createContext(null)

function FootageProvider({ children }) {
  const [footage, setFootage] = useState([])
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    const load = async () => {
      const data = await database().get(config.storage.footage)
      setFootage(data?.footage ?? [])
      setIsHydrated(true)
    }
    load()
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
