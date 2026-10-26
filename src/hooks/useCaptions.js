import { useContext } from 'react'
import { CaptionsContext } from '../components/Providers/CaptionsProvider'

function useCaptions() {
  // debugging:
  const context = useContext(CaptionsContext)

  console.log('context: ', context)

  if (context === null) {
    throw new Error('useCaptions must be used within CaptionsProvider')
  }

  const { captions, createCaption } = useContext(CaptionsContext)

  return { captions, createCaption }
}

export default useCaptions
