import styles from './Menu.module.css'

function Menu() {
  return (
    <div className="rolodex-contain>
      <ul className="rolodex-wheel">
        <li className="item active">Home</li>
        <li className="item">About</li>
        <li className="item">Services</li>
        <li className="item">Portfolio</li>
        <li className="item">Contact</li>
      </ul>
    </div>
  )
}

export default Menu
