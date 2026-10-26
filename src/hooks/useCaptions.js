import { useContext } from 'react'
import { CaptionsContext } from '../components/Providers/CaptionsProvider'

function useCaptions() {
  // const { captions, createCaption } = useContext(CaptionsContext)

  const context = useContext(CaptionsContext)

  console.log('context: ', context)

  if (context === null) {
    throw new Error('useCaptions must be used within CaptionsProvider')
  }

  return { captions, createCaption }
}

export default useCaptions
