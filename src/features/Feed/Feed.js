import { useState, useRef, memo } from 'react'
import { api } from '../../config'
import server from '../../utilities/server'
import database from '../../../utilities/database'
import FeedNode from './FeedNode/FeedNode'
import Sentinel from './Sentinel/Sentinel' 
import styles from './Feed.module.css'

function Feed() {
  const [data, setData] = useState([
    { video: 1, caption: 'test 1' },
    { video: 2, caption: 'test 2' },
    { video: 3, caption: 'test 3' }
  ])
  
  return (
    <section className={styles.feed} role="feed">
      {data.map((item, index) => <FeedNode key={index} item={item} index={index + 1} count={data.length} />)}
      
      {/* <Sentinel onVisible={loadMoreData} /> */}
    </section>
  )
}

export default Feed
