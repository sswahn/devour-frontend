import { useRef } from 'react'
import camera from '../../../utilities/camera'
import { getDuration } from '../../../utilities/videoEditor'
import database from '../../../utilities/database'
import styles from './RecordButton.module.css'

function RecordButton({ footage, setFootage, mode, setMode, streamRef, timer }) {
  const framesRef = useRef([])
  const recordingRef = useRef(null)
  
  const startRecord = () => {
    if (timer < 1) {
      return alert('No recording time remaining.')
    }
    setMode('on')
    recordingRef.current = camera.startRecording(streamRef.current, framesRef.current)
  }
  
  const stopRecord = async () => {
    try {
      if (!recordingRef.current) {
        throw new Error('No active recording found.')
      }
      const blob = await camera.stopRecording(
        recordingRef.current,
        framesRef.current
      )
      const duration = await getDuration(blob)
      recordingRef.current = null
      
      const data = {
        id: crypto.randomUUID(),
        clip: blob,
        name: `Clip ${new Date().toLocaleTimeString()}`,
        duration,
        trimStart: 0,
        trimEnd: duration,
        mimeType: blob.type || 'video/webm'
      }
  
      const clips = [...(footage ?? []), data]
  
      console.log('updated footage (clips): ', clips)
      
      setFootage(clips)
      const db = database()
      await db.put({ id: 'footage', footage: clips })
      
    } catch (error) {
      console.error('Failed to stop recording:', error) // polish error handling: use setErrorMessage
    } finally {
      setMode('off')
    }
  }
  
  const onClick = event => {
    navigator.vibrate?.(50)
    mode === 'on' ? stopRecord() : startRecord()
  }
  
  return (
    <div className={styles.recordButtonContainer}>
      <button className={styles.recordButton} onClick={onClick} type="button" aria-label="record button" style={{
        backgroundColor: mode === 'on' ? '#cb4154' : '#e5e4e2', 
        borderColor: mode === 'on' ? '#eb4c42' : 'white'
      }}></button>
    </div>
  )
}

export default RecordButton
