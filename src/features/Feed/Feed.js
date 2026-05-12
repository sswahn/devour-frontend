import { useState, useRef, useEffect } from 'react'
import { api } from '../../config'
import createObserver from '../../utilities/observer'
import server from '../../utilities/server'
import database from '../../utilities/database'
import useScroll from '../../hooks/useScroll'
import FeedNode from './FeedNode/FeedNode'
import Sentinel from './Sentinel/Sentinel' 
import styles from './Feed.module.css'

function Feed() {
  const { setScrollRef } = useScroll()
  const { observe, unobserve, disconnect } = createObserver()
  const [data, setData] = useState([
    { video: 1, caption: 'test 1' },
    { video: 2, caption: 'test 2' },
    { video: 3, caption: 'test 3' }
  ])

  const observerCallback = () => {
    // pass to observer
    console.log('feed node observer called.')
  }

  const setObserver = node => {
    if (node) {
      observe(node, observerCallback)
    }
  }

  useEffect(() => {
    return () => {
      disconnect()
    }
  }, [])
  
  return (
    <section ref={setScrollRef} className={styles.feed} role="feed">
      {data.map((item, index) => <FeedNode key={index} ref={setObserver} item={item} index={index + 1} count={data.length} />)}
      
      {/* <Sentinel onVisible={loadMoreData} /> */}
    </section>
  )
}

export default Feed
