import styles from './LocationButton.module.css'


function LocationButton() {

  const onClick = event => {
    navigator.vibrate?.(50)
    
  }
  
  return (
    <button onClick={onClick} type="button">Location</button>
  )
}

export default LocationButton
