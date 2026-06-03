import { useState, createContext } from 'react'

const FootageContext = createContext(null)

function FootageProvider({ children }) {
  const [footage, setFootage] = useState([])
  const [duration, setDuration] = useState([])

  return (
    <CameraContext.Provider value={{ footage, setFootage, duration, setDuration }}>
      {children}
    </CameraContext.Provider>
  )
}

export { FootageContext, FootageProvider }
