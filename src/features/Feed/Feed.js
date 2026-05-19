import { useState, useRef, useEffect } from 'react'
import { api } from '../../config'
import createObserver from '../../utilities/observer'
import server from '../../utilities/server'
import database from '../../utilities/database'
import FeedNode from './FeedNode/FeedNode'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'
import Sentinel from './Sentinel/Sentinel' 
import styles from './Feed.module.css'

function Feed() {
  const { observe, unobserve, disconnect } = createObserver()
  const [data, setData] = useState([
    { video: 1, caption: 'test 1' },
    { video: 2, caption: 'test 2' },
    { video: 3, caption: 'test 3' }
  ])
  const [loading, setLoading] = useState(false)
  
  const observerCallback = entry => { 
    if (entry.isIntersecting) {
      // could handle lazy loading video here 
      unobserve(node)
    }
  }

  const setObserver = node => { // gets passed into ref={setObserver} in FeedNode
    if (node) {
      //observe(node, observerCallback)
    }
  }

  useEffect(() => {
    return () => {
      disconnect()
    }
  }, [])
  
  return (
    <section className={styles.feed} role="feed">
      {data.map((item, index) => <FeedNode key={index} item={item} index={index + 1} count={data.length} />)}
      {loading && <LoadingSpinner />}
      <Sentinel loadMore={loadMore} hasMore={hasMore && !loading} />
    </section>
  )
}

export default Feed
