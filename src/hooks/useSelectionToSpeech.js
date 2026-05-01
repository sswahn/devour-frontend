import { useEffect } from 'react'
import useDebounce from './useDebounce'

function useSelectionToSpeech() {
  
  const onSelectionChange = useDebounce(() => {
    const selection = window.getSelection().toString().trim()
    window.speechSynthesis.cancel()

    if (selection) {
      const utterance = new SpeechSynthesisUtterance(selection)
      window.speechSynthesis.speak(utterance)
    }
  }, 200)
  
  useEffect(() => {
    document.addEventListener('selectionchange', onSelectionChange)
    return () => {
      document.removeEventListener('selectionchange', onSelectionChange)
    }
  }, [])
}

export default useSelectionToSpeech
