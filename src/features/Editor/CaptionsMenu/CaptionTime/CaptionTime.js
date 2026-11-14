import Input from '../../../../components/Input/Input'

function CaptionTime() {

  return (
    <>
      <Input
        id="start"
        inputMode="decimal"
        type="number" 
        step="any"
        label="Start"
        value={activeCaption.start} // consider getting default value from timeline
        error={errorMessage}
        onChange={updateActiveCaption}
        required />
      <Input
        id="end"
        inputMode="decimal"
        type="number" 
        step="any"
        label="End"
        value={activeCaption.end}
        error={errorMessage}
        onChange={updateActiveCaption}
        required />
    </>
  )
} 

export default CaptionTime
