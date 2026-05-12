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
  const prevNode = useRef(null)
  const [data, setData] = useState([
    { video: 1, caption: 'test 1' },
    { video: 2, caption: 'test 2' },
    { video: 3, caption: 'test 3' }
  ])

  const observerCallback = node => {
    console.log('node in observerCallback: ', node)
    console.log('prevNode.current: ', prevNode.current)
    // handle roving index (for key navigation)
    node.tabIndex = '-1'
    prevNode.current?.tabIndex = '0'
    prevNode.current = node
  }

  const setObserver = node => {
    console.log('node in setObserver: ', node)
    if (node) {
      observe(node, () => observerCallback(node))
    }
  }

  useEffect(() => {
    return () => {
      disconnect()
    }
  }, [])
  
  return (
    <section ref={setScrollRef} className={styles.feed} role="feed">
      {data.map((item, index) => <FeedNode key={index} setObserver={setObserver} item={item} index={index + 1} count={data.length} />)}
      
      {/* <Sentinel onVisible={loadMoreData} /> */}
    </section>
  )
}

export default Feed
