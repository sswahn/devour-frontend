import { useState, useRef, useEffect } from 'react'
import { api } from '../../config'
import createObserver from '../../utilities/observer'
import server from '../../utilities/server'
import database from '../../utilities/database'
import FeedNode from './FeedNode/FeedNode'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'
import Sentinel from './Sentinel/Sentinel' 
import styles from './Feed.module.css'

function Feed({ data, setData, videoRefs, style }) {
  const { observe, unobserve, disconnect } = createObserver()
  const [loadMore, setLoadMore] = useState(false)
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

  const loadData = async () => {
    if (!setData) {
      return console.log('setData undefined')
    }
    // since data is passed from parent
    // loadData/updateData should be passed from there as well.
    // need to set loading here though so it would execute 
    // inside this function. something like: 
    // setData(prev => [...prev, ...response.data])
    // loadMore(false)
  }

  useEffect(() => {
    if (loadMore) {
      console.log('sentinel intersected, loading more data!')
      // loadData()
    }
  }, [loadMore])

  useEffect(() => {
    return () => {
      disconnect()
    }
  }, [])
  
  return (
    <section className={styles.feed} style={style} role="feed">
      {data.map((item, index) => <FeedNode key={index} ref={videoRefs} item={item} index={index + 1} count={data.length} />)}
      {loading && <LoadingSpinner />}
      <Sentinel setLoadMore={setLoadMore} />
    </section>
  )
}

export default Feed
