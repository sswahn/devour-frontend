import { useContext } from 'react'
import { CaptionsContext } from '../components/Providers/CaptionsProvider'
import * as config from '../config'
import storage from '../utilities/storage'

function useCaptions() {
  const { captions, createCaption } = useContext(CaptionsContext)

  useEffect(() => {
    storage.local.set(config.storage.captions, [...captions, data])
  }, [captions])
  
  return { captions, createCaption }
}

export default useCaptions
