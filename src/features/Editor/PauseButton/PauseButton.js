import PlayIcon from '../../../components/Icons/PlayIcon/PlayIcon'
import PauseIcon from '../../../components/Icons/PauseIcon/PauseIcon'
import styles from './PauseButton.module.css'

function PauseButton({ pause }) {

  

  return (
    <button className="icon-btn-alt" onClick={togglePause} type="button" aria-label={`${pause ? 'play' : 'pause'} video`}>
      {pause ? <PlayIcon /> : <PauseIcon />}
    </button>
  )
}

export default PauseButton
