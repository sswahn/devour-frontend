import { useState, useContext, useEffect, useRef } from 'react'
import { CaptionsContext } from '../components/Providers/CaptionsProvider'
import * as config from '../config'
import storage from '../utilities/storage'

function useCaptions() {
  const { captions, createCaptions } = useContext(CaptionsContext)
  const [isHydrated, setIsHydrated] = useState(false)
  const hasLoaded = useRef(false)

  useEffect(() => {
    if (hasLoaded.current) {
      return
    }
    hasLoaded.current = true
    const stored = storage.local.get(config.storage.captions) ?? []
    createCaptions(stored)
    setIsHydrated(true)
  }, [createCaptions])
  
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
  
  return { captions, createCaptions }
}

export default useCaptions
