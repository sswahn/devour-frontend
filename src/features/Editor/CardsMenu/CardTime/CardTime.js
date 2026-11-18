import { useState } from 'react'
import Input from '../../../../components/Input/Input'
import styles from './CardTime.module.css'

function CardTime({ activeCard, updateActiveCardTime, errors }) {
  const [errorMessage, setErrorMessage] = useState('')
  
  return (
    <div className={styles.captionTime}>
      <Input
        id="start"
        inputMode="decimal"
        type="number" 
        step="any"
        label="Start"
        value={activeCard.start}
        error={errors.start}
        onChange={updateActiveCardTime}
        required />
      <Input
        id="end"
        inputMode="decimal"
        type="number" 
        step="any"
        label="End"
        value={activeCard.end}
        error={errors.end}
        onChange={updateActiveCardTime}
        required />
    </div>
  )
} 

export default CaptionTime
