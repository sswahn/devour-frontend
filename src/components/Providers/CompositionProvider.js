import { useState, createContext, useEffect } from 'react'
import * as config from '../../config'
import database from '../../utilities/database'

const CompositionContext = createContext(null)

function CompositionProvider({ children }) {
  const [composition, setComposition] = useState({})
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    const hydrate = async () => {
      const data = await database().get(config.storage.composition)
      if (data?.composition?.blob?.size > 0) {
        setComposition(data.composition)
        setIsHydrated(true)
      }
    }
    hydrate()
  }, [])
  
  useEffect(() => {
    if (!isHydrated) {
      return
    }
    database().put({ id: config.storage.composition, composition })
  }, [composition, isHydrated])
  
  return (
    <CompositionContext.Provider value={{ composition, setComposition }}>
      {children}
    </CompositionContext.Provider>
  )
}

export { CompositionContext, CompositionProvider }
