import styles from './Menu.module.css'

function ContextMenu({ items }) {

  // global element that spawns at pointer location, yet doesnt go off screen.
  // when a specific element is targeted, if it is in the list of elements with instructions
  // add the info icon and information text to open a dialog element
  // also some elements have specific actions, such as feed node: Like, Share, Flag, etc.
  // perhaps use a config for ContextMenu, that uses "info", "actions" and contains keys to the elements,
  // and related content
  
  return (
    <menu className={styles.contextMenu}>
     {items.map(item => <li>{item.text}</li>)}
    </menu>
  )
}

export default ContextMenu
