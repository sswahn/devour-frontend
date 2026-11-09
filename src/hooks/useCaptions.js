import { useContext } from 'react'
import { CaptionsContext } from '../components/Providers/CaptionsProvider'

function useCaptions() {
  const { captions, createCaptions } = useContext(CaptionsContext)
  
  return { captions, createCaptions }
}

export default useCaptions
