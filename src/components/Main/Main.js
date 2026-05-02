import { useState, useEffect } from 'react'
import Feed from '../../features/Feed/Feed'
import styles from './Main.module.css'

function Main() {
  
  return (
    <main className={styles.main} aria-description="When text is highlighted, it will automatically be read aloud.">
    
      {/* <Suggestions /> etc. */}
    
      <Feed />
    </main>
  )
}

export default Main
