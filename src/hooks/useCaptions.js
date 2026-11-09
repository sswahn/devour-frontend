import { useContext } from 'react'
import { CaptionsContext } from '../components/Providers/CaptionsProvider'

function useCaptions() {
  const { captions, createCaption, updateCaption, deleteCaption } = useContext(CaptionsContext)
  
  return { captions, createCaption, updateCaption, deleteCaption }
}

export default useCaptions
