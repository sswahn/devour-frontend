import { useState, createContext } from 'react'

const EditorContext = createContext(null)

function EditorProvider({ children }) {
  const [captions, setCaptions] = useState([])

  const createCaption = data => {
    setCaptions(prev => [ ...prev, data])
  }
  
  return (
    <EditorContext.Provider value={{ captions, createCaption }}>
      {children}
    </EditorContext.Provider>
  )
}

export { EditorContext, EditorProvider }
