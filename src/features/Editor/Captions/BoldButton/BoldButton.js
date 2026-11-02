import BoldIcon from '../../../../components/Icons/BoldIcon/BoldIcon'

function BoldButton({ setBold }) {

  const onClick = event => {
    
    setBold(prev => !prev)
  }
  
  return (
    <button onClick={onClick} type={button} aria-label="bold">
      <BoldIcon />
    </button>
  )
}

export default BoldButton
