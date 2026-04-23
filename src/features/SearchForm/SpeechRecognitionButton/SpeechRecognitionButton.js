import { useRef, useEffect, memo } from 'react'
import useSpeechRecognition from '../../../hooks/useSpeechRecognition'
import useSpeechChime from '../../../hooks/useSpeechChime'
import MicrophoneIcon from '../../Icons/MicrophoneIcon/MicrophoneIcon'
import styles from './SpeechRecognitionButton.module.css'

/*
isSupported,
isListening,
finalTranscript,
interimTranscript,
error,
start,
stop,
reset
*/

function SpeechRecognitionButton({ setSearchValue }) {
  const recognition = useSpeechRecognition()
  const chime = useSpeechChime()

  const action = () => {
    if (recognition.isListening) {
      recognition.stop()
      chime.playStop()
    } else {
      recognition.reset()
      recognition.start()
      chime.playStart()
    }
  }

  const onClick = event => {
    navigator.vibrate?.(50)
    action()
  }

  const onKeyDown = event => {
    if (event.key === 'Enter') {
      event.preventDefault()
      action()
    }
  }

  useEffect(() => {
    const combined = `${recognition.finalTranscript} ${recognition.interimTranscript ? recognition.interimTranscript : ''}`
    if (combined) {
      setSearchValue(combined)
    }
  }, [recognition.finalTranscript, recognition.interimTranscript, setSearchValue])

  return recognition.isSupported && (
    <button 
      className={`${styles.speechRecognitionButton} ${recognition.isListening ? styles.active : ''}`} 
      onClick={onClick}
      onKeyDown={onKeyDown}
      type="button" 
      aria-label="speech recognition"
      aria-description="search using your voice">
      <MicrophoneIcon size={18} />
    </button>
  )
}

export default SpeechRecognitionButton
