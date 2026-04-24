import { useContext, useRef } from 'react'
import { Context } from '../../../archive/Provider'
import database from '@sswahn/database'
import styles from './recordbutton.module.css'

function RecordButton({ streamRef, timer }) {
  const [context, dispatch] = useContext(Context)
  const framesRef = useRef([])
  const recorderRef = useRef(null)
  
  const handleRecordVideo = () => {
    if (timer < 1) {
      return alert('No recording time remaining.')
    }
    dispatch({ type: 'recording', payload: true })
    const recorder = camera.startRecording(streamRef.current, framesRef.current)
    recorderRef.current = recorder
  }

  const handleStopRecordVideo = async () => {
    try {
      dispatch({ type: 'recording', payload: false })

      alert('handlingStopVideo')
      
      const blob = await camera.stopRecording(recorderRef.current, framesRef.current)

      alert('after blob')
      
      const video = [ ...context.video, blob ]
      const currentDuration = context.video_duration.reduce((acc, val) => acc + val, 0)

      alert('after currentDuration')
      
      const duration = [ ...context.video_duration, 300 - timer - currentDuration ]
      
      dispatch({ type: 'video_duration', payload: duration })
      dispatch({ type: 'video', payload: video })
  
      alert('saving the following: video: ' + JSON.stringify(video) + 'and duration: ' + duration)

      const db = database()
      db.put({ id: 'video', video, duration })
        
    } catch (error) {
      alert(JSON.stringify(error))
    }
  }
  
  const handleRecordButton = event => {
    context.recording ? handleStopRecordVideo() : handleRecordVideo()
  }
  
  return (
    <div className={styles.recordButtonContainer}>
      <button className={styles.recordButton} onClick={handleRecordButton} type="button" aria-label="record button" style={{
        backgroundColor: context.recording ? '#cb4154' : '#e5e4e2', 
        borderColor: context.recording ? '#eb4c42' : 'white'
      }}></button>
    </div>
  )
}

export default RecordButton
