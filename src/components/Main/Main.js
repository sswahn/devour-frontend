import { useState, useEffect } from 'react'
import Feed from '../../features/Feed/Feed'
import styles from './Main.module.css'

function Main() {
  
  return (
    <main className={styles.main}>
    
      {/* <Suggestions /> etc. */}
    
      <Feed />
    </main>
  )
}

export default Main
