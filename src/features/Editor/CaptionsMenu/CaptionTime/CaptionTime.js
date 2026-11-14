import { useState } from 'react'
import Input from '../../../../components/Input/Input'

function CaptionTime({ activeCaption, updateActiveCaption }) {
  const [errorMessage, setErrorMessage] = useState('')
  
  return (
    <>
      <Input
        id="start"
        inputMode="decimal"
        type="number" 
        step="any"
        label="Start"
        value={activeCaption.start} // get default value from timeline
        error={errorMessage}
        onChange={updateActiveCaption}
        required />
      <Input
        id="end"
        inputMode="decimal"
        type="number" 
        step="any"
        label="End"
        value={activeCaption.end} // get default value from timeline and add 3 or 4 seconds by default
        error={errorMessage}
        onChange={updateActiveCaption}
        required />
    </>
  )
} 

export default CaptionTime
