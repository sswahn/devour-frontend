import LocationIcon from '../../../components/Icons/LocationIcon/LocationIcon'
import styles from './LocationButton.module.css'

function LocationButton() {

  const handleOpenLocation = event => {
    
  }

  return (
    <button className={styles.locationButton} onClick={handleOpenLocation} type="button" aria-haspopup="dialog" aria-label="select your location">
      <LocationIcon />
    </button>
  )
}

export default LocationButton
