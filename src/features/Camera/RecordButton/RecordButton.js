import { useRef } from 'react'
import useFootage from '../../../hooks/useFootage'
import camera from '../../../utilities/camera'
import database from '../../../utilities/database'
import styles from './RecordButton.module.css'

function RecordButton({ mode, setMode, streamRef, timer }) {
  const { footage, setFootage } = useFootage()
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

    // need to add up total duration of each existing duration
    let totalDuration = 0
    if (footage.length > 0) {
      totalDuration = footage.reduce((acc, val) => acc + val.duration, 0)
    }
    // subtract total duration from 60 to get trimStart of current clip
    const clipStart = totalDuration > 0 ? 60 - totalDuration : 0
    const duration = clipStart - timer

    const data = {
      id: crypto.randomUUID(),
      clip: blob,
      name: `Clip ${new Date().toLocaleTimeString()}`,
      duration,
      trimStart: clipStart,
      trimEnd: duration, // need to check this.
      mimeType: blob.type || 'video/webm',
    }

    const clips = [...(footage ?? []), data]

    setFootage(clips)

    const db = database()
    await db.put({ id: 'footage', footage: clips })

    setMode('off')
    recordingRef.current = null
  } catch (error) {
    setMode('off')
    console.error('Failed to stop recording:', error)
    alert(error.message)
  }
}


  /*
  const stopRecord = async () => {
    try {
      setMode('off')
      const blob = await camera.stopRecording(recorderRef.current, framesRef.current)
      const newFootage = new Blob([ footage, blob ], { type: 'video/webm' }) 
      setFootage(newFootage)
      const db = database()
      db.put({ id: 'footage', footage: newFootage })
    } catch (error) {
      alert(error.message)
      console.log(error)
    }
  }
  */
  
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
