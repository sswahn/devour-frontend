import LocationIcon from '../../../components/Icons/LocationIcon/LocationIcon'
import styles from './LocationButton.module.css'

function LocationButton() {

  const onClick = event => {
    navigator.vibrate?.(50)
  }

  return (
    <button className={styles.locationButton} onClick={onClick} type="button" aria-haspopup="dialog" aria-label="select your location">
      <LocationIcon />
    </button>
  )
}

export default LocationButton
