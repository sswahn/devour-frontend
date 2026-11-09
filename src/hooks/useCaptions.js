import { useState, useContext, useEffect } from 'react'
import { CaptionsContext } from '../components/Providers/CaptionsProvider'
import * as config from '../config'
import storage from '../utilities/storage'

function useCaptions() {
  const { captions, createCaptions } = useContext(CaptionsContext)
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    if (captions.length > 0) {
      return
    }
    const load = async () => {
      try {
        const stored = storage.local.get(config.storage.captions) ?? []
        createCaptions(stored)
      } catch (error) {
        throw error
      } finally {
        setIsHydrated(true)
      }
    }
    load()
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
