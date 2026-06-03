import { useState } from 'react'
import camera from '../../../utilities/camera'
import SunIcon from '../../../components/Icons/SunIcon/SunIcon'
import DarkSunIcon from '../../../components/Icons/SunIcon/DarkSunIcon'
import styles from './LightButton.module.css'

function LightButton({ streamRef }) {
  const [light, setLight] = useState(false)

  const handleTurnOnLight = event => {
    light ? camera.dark(streamRef.current) : camera.light(streamRef.current)
    setLight(!light)
  }
  
  return (
    <button className={styles.lightButton} onClick={handleTurnOnLight} type="button" aria-label="camera light button">
      {light ? <DarkSunIcon /> : <SunIcon />}
    </button>
  )
}

export default LightButton
