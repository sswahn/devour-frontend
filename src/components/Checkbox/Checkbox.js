import { useRef, memo } from 'react'
import CheckedIcon from '../Icons/CheckboxIcon/CheckedIcon.js'
import UncheckedIcon from '../Icons/CheckboxIcon/UncheckedIcon.js'
import styles from './Checkbox.module.css'

const Checkbox = memo(({ label, checked, onChange }) => {
  const checkboxRef = useRef(null)

  const action = () => {
    checkboxRef.current.click()
  }

  const onClick = event => {
    navigator.vibrate?.(50)
    action()
  }

  const onKeyDown = event => {
    if (event.key === 'Enter') {
      action()
    }
  }

  return (
    <button className={styles.checkbox}>
      <label onClick={onClick} onKeyDown={onKeyDown}>{label}</label>
      <input ref={checkboxRef} type="checkbox" checked={checked} onChange={onChange} />
      {checked ? <CheckedIcon size={20} /> : <UncheckedIcon size={20} />}
    </button>
  )
})

export default Checkbox
