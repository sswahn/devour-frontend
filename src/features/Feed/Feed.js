import { useState, useRef, memo } from 'react'
import { api } from '../../config'
import server from '../../utilities/server'
import database from '@sswahn/database' // move locally
import FeedNode from './FeedNode/FeedNode'
import Sentinel from './Sentinel/Sentinel' 
import styles from './Feed.module.css'

function Feed() {
  const [data, setData] = useState([1])
  
  return (
    <section className={styles.feed} role="feed">
    
      {data.map((item, index) => 
        <FeedNode key={index} item={item} index={index + 1} count={data.length} />
      )}
{/*
      <Sentinel onVisible={loadMoreData} />
*/}
    </section>
  )
}

export default Feed // memo(Feed)
