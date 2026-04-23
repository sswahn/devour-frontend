import { useState, createContext } from 'react'

const CameraContext = createContext(null)

function CameraProvider({ children }) {
  const [state, setState] = useState(false)

  return (
    <CameraContext.Provider value={state, setState}>
      {children}
    </CameraContext.Provider>
  )
}

export { CameraContext, CameraProvider }
