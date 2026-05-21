import { useContext, useRef } from 'react'
import { Context } from '../../../archive/Provider'
import camera from '../../../utilities/camera'
import database from '../../../utilities/database'
import styles from './recordbutton.module.css'

function RecordButton({ mode, setMode, streamRef, timer }) {
  const [context, dispatch] = useContext(Context)
  const framesRef = useRef([])
  const recorderRef = useRef(null)
  
  const handleRecordVideo = () => {
    if (timer < 1) {
      return alert('No recording time remaining.')
    }
    setMode('on')
    const recorder = camera.startRecording(streamRef.current, framesRef.current)
    recorderRef.current = recorder
  }

  const handleStopRecordVideo = async () => {
    try {
      setMode('off')
      
      console.log('handlingStopVideo')
      
      const blob = await camera.stopRecording(recorderRef.current, framesRef.current)

      console.log('after blob')
      
      const video = [ ...context.video, blob ]
      const currentDuration = context.video_duration.reduce((acc, val) => acc + val, 0)

      console.log('after currentDuration')
      
      const duration = [ ...context.video_duration, 300 - timer - currentDuration ]

      // camera doesnt use context, so this legacy code is most likely for Preview related components.
      // Editor provider will be neccessary. with something like: { footage: [], duration }
      dispatch({ type: 'video_duration', payload: duration })
      dispatch({ type: 'video', payload: video })
  
      console.log('saving the following: video: ' + JSON.stringify(video) + 'and duration: ' + duration)

      const db = database()
      db.put({ id: 'video', video, duration })
        
    } catch (error) {
      alert(JSON.stringify(error))
    }
  }
  
  const handleRecordButton = event => {
    mode === 'on' ? handleStopRecordVideo() : handleRecordVideo()
  }
  
  return (
    <div className={styles.recordButtonContainer}>
      <button className={styles.recordButton} onClick={handleRecordButton} type="button" aria-label="record button" style={{
        backgroundColor: mode === 'on' ? '#cb4154' : '#e5e4e2', 
        borderColor: mode === 'on' ? '#eb4c42' : 'white'
      }}></button>
    </div>
  )
}

export default RecordButton
