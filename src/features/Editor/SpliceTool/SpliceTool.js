import { useState, useEffect } from 'react'
import Input from '../../components/Input/Input'
import styles from './SpliceTool.module.css'

function SpliceTool() {

  // reqires a new ffmpeg function
  // getting a segment of the blob via start/end time
  // and inserting it in at a given location (insertion time)

  // this component will have three inputs:
  // start, end, insert
  
  return (
    <section className={styles.spliceTool}></section>
  )
}

export default SpliceTool
