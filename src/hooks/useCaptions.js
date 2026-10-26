import { useContext } from 'react'
import { CaptionsContext } from '../components/Providers/CaptionsProvider'

function useCaptions() {
  const { captions, createCaption } = useContext(CaptionsContext)

  return { captions, createCaption }
}

export default useCaptions
