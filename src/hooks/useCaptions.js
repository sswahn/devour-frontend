import { useState, useContext } from 'react'
import { CaptionsContext } from '../components/Providers/CaptionsProvider'
import * as config from '../config'
import storage from '../utilities/storage'

function useCaptions() {
  const { captions, createCaption } = useContext(CaptionsContext)
  const [isHydrated, setIsHydrated] = useState(false)

  
  useEffect(() => {
    if (!isHydrated) {
      return
    }
    const timer = setTimeout(() => {
      try {
        storage.local.set(config.storage.captions, captions)
      } catch (error) {
        throw error
      }
    }, 500)
    return () => {
      clearTimeout(timer)
    }
  }, [captions, isHydrated])
  
  return { captions, createCaption }
}

export default useCaptions
