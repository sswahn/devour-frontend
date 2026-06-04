import { useRef } from 'react'
import useFootage from '../../../hooks/useFootage'
import camera from '../../../utilities/camera'
import database from '../../../utilities/database'
import styles from './RecordButton.module.css'

function RecordButton({ mode, setMode, streamRef, timer }) {
  const { footage, setFootage, duration, setDuration } = useFootage()
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
      const blob = await camera.stopRecording(recorderRef.current, framesRef.current)
      const totalDuration = duration.reduce((acc, val) => acc + val, 0)
      const newDuration = 60 - timer - currentDuration
      setFootage([ ...footage, blob ])
      setDuration([ ...duration, newDuration ])
      const db = database()
      db.put({ id: 'footage', footage, duration })
      
    } catch (error) {
      alert(error.message)
      console.log(error)
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
