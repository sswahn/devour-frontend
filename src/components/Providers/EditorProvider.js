import { useState, createContext } from 'react'

const EditorContext = createContext(null)

function EditorProvider({ children }) {
  const [data, setData] = useState({})
  
  return (
    <EditorContext.Provider value={{ data, setData }}>
      {children}
    </EditorContext.Provider>
  )
}

export { EditorContext, EditorProvider }
