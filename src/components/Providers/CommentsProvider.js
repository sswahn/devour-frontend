import { useState, createContext } from 'react'

const ContentContext = createContext(null)

function ContentProvider({ children }) {
  const [content, setContent] = useState({
    id: '',
  })
  
  return (
    <ContentContext.Provider value={{ content, setContent }}>
      {children}
    </ContentContext.Provider>
  )
}

export { ContentContext, ContentProvider }
