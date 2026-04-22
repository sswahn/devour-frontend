import { useEffect, useRef, useState, useCallback } from 'react'

function useSpeechRecognition({ continuous = true, interimResults = true, lang = 'en-US' } = {}) {
  const recognitionRef = useRef(null)
  const isListeningRef = useRef(false)
  
  const [isSupported, setIsSupported] = useState(true)
  const [isListening, setIsListening] = useState(false)
  const [finalTranscript, setFinalTranscript] = useState('')
  const [interimTranscript, setInterimTranscript] = useState('')
  const [error, setError] = useState(null)

  // Initialize recognition
  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition

    if (!SpeechRecognition) {
      setIsSupported(false)
      return
    }

    const recognition = new SpeechRecognition()
    recognition.continuous = continuous
    recognition.interimResults = interimResults
    recognition.lang = lang

    recognitionRef.current = recognition

    recognition.onstart = () => {
      isListeningRef.current = true
      setIsListening(true)
    }

    recognition.onend = () => {
      isListeningRef.current = false
      setIsListening(false)
    }

    recognition.onerror = event => {
      setError(event.error)
    }

    recognition.onresult = event => {
      let interim = ''
      let final = ''

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript

        if (event.results[i].isFinal) {
          final += `${transcript} `
        } else {
          interim += transcript
        }
      }

      if (final) {
        setFinalTranscript(final.trim())
      }

      setInterimTranscript(interim)
    }

    return () => {
      recognition.abort()
    }
  }, [continuous, interimResults, lang])

  // Controls
  const start = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.start()
    }
  }, [])

  const stop = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.stop()
    }
  }, [])

  const reset = useCallback(() => {
    setFinalTranscript('')
    setInterimTranscript('')
  }, [])

  return {
    isSupported,
    isListening,
    finalTranscript,
    interimTranscript,
    error,
    start,
    stop,
    reset
  }
}

export default useSpeechRecognition
