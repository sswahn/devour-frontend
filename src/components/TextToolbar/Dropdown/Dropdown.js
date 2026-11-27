import styles from './Dropdown.module.css'

function Dropdown({ children }) {

  return (
    <div className={styles.dropdown}>{children}</div>
  )
}

export default Dropdown
