import LocationIcon from '../../../components/Icons/LocationIcon/LocationIcon'
import styles from './LocationButton.module.css'

function LocationButton() {

  const onClick = event => {
    // open map
  }
  
  return (
    <button className={styles.locationButton} onClick={onClick} type="button" aria-label="open location on map">
      <LocationIcon />
    </button>
  )
}

export default LocationButton
