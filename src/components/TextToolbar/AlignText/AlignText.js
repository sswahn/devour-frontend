// import left center right icons
import styles from './AlignText.module.css'

function AlignText() {

  const alignLeft = event => {}
  const alignCenter = event => {}
  const alignRight = event => {}

  return (
    <menu>
      <li>
        <button onClick={alignLeft}></button>
      </li>
      <li>
        <button onClick={alignCenter}></button>
      </li>
      <li>
        <button onClick={alignRight}></button>
      </li>
    </menu>
  )
}

export default AlignText
