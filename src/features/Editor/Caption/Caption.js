import { useState, useEffect } from 'react'
import Input from '../../components/Input'
import styles from './Caption.module.css'

function Caption() {
  return (
    <section className={styles.caption}>
      <form>
        <Input 
          id="caption-input"
        />
      </form>
    </section>
  )
}

export default Caption
