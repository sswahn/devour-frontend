import { useState, createContext } from 'react'

const FootageContext = createContext(null)

function FootageProvider({ children }) {
  const [footage, setFootage] = useState([])

  return (
    <FootageContext.Provider value={{ footage, setFootage }}>
      {children}
    </FootageContext.Provider>
  )
}

export { FootageContext, FootageProvider }
