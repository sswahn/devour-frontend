import { useRef } from 'react'
import useFocusStack from '../../../hooks/useFocusStack'
import LineChartIcon from '../../Icons/LineChartIcon/LineChartIcon'
import styles from './DashboardButton.module.css'

function DashboardButton({ openDashboard }) {
  const { push } = useFocusStack()
  const buttonRef = useRef(null)
  
  const action = () => {
    openDashboard()
    push(buttonRef.current)
  }
  
  const onClick = event => {
    navigator.vibrate?.(50)
    action()
  }
  
  const onKeyDown = event => {
    if (event.key === 'Enter') {
      event.preventDefault()
      action()
    }
  }
  
  return (
    <button className={styles.dashboardButton} onClick={onClick} onKeyDown={onKeyDown} ref={buttonRef} type="button" aria-label="open dashboard">
      <LineChartIcon />
    </button>
  )
}

export default DashboardButton
