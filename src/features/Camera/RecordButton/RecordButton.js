import { useRef } from 'react'
import useFootage from '../../../hooks/useFootage'
import camera from '../../../utilities/camera'
import database from '../../../utilities/database'
import styles from './RecordButton.module.css'

function RecordButton({ mode, setMode, streamRef, timer }) {
  const { footage, setFootage } = useFootage()
  const framesRef = useRef([])
  const recorderRef = useRef(null)
  
  const startRecord = () => {
    if (timer < 1) {
      return alert('No recording time remaining.')
    }
    setMode('on')
    const recorder = camera.startRecording(streamRef.current, framesRef.current)
    recorderRef.current = recorder
  }

  const stopRecord = async () => {
    try {
      setMode('off')
      const blob = await camera.stopRecording(recorderRef.current, framesRef.current)
      const newFootage = [ ...footage, blob ] // consider not using an array, (currently serves no purpose)
      setFootage(newFootage)
      const db = database()
      db.put({ id: 'footage', footage: newFootage })
    } catch (error) {
      alert(error.message)
      console.log(error)
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
