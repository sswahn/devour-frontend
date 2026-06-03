import { useState, createContext } from 'react'

const FootageContext = createContext(null)

function FootageProvider({ children }) {
  const [footage, setFootage] = useState([])
  const [duration, setDuration] = useState([])

  return (
    <FootageContext.Provider value={{ footage, setFootage, duration, setDuration }}>
      {children}
    </FootageContext.Provider>
  )
}

export { FootageContext, FootageProvider }
