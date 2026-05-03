import { useState, createContext } from 'react'

const CommentsContext = createContext(null)

function CommentsProvider({ children }) {
  const [comments, setComments] = useState([])
  
  return (
    <CommentsContext.Provider value={{ comments, setComments }}>
      {children}
    </CommentsContext.Provider>
  )
}

export { CommentsContext, CommentsProvider }
