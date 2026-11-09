import { useState, useEffect, createContext } from 'react'
import database from '../../utilities/database'

const FootageContext = createContext(null)

function FootageProvider({ children }) {
  const [footage, setFootage] = useState([])

  const loadFromStorage = async () => {
    if (footage.length) {
      return
    }
    const data = await database().get('footage')
    setFootage(data?.footage ?? [])
  }
  
  useEffect(() => {
    loadFromStorage()
  }, [])
  
  return (
    <FootageContext.Provider value={{ footage, setFootage }}>
      {children}
    </FootageContext.Provider>
  )
}

export { FootageContext, FootageProvider }
