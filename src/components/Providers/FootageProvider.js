import { useState, createContext } from 'react'

const FootageContext = createContext(null)

function FootageProvider({ children }) {
  const [footage, setFootage] = useState(null)
  const [duration, setDuration] = useState(0)

  return (
    <CameraContext.Provider value={{ footage, setFootage, duration, setDuration }}>
      {children}
    </CameraContext.Provider>
  )
}

export { FootageContext, FootageProvider }
