import { useState, useRef, memo } from 'react'
import { config } from '../../config'
import server from '../../utilities/server'
import database from '@sswahn/database'
import FeedNode from './FeedNode/FeedNode'
import Sentinel from '../../../components/Sentinel/Sentinel' 
import styles from './Feed.module.css'

function Feed() {
  const [data, setData] = useState([1])
  const [batchNumber, setBatchNumber] = useState(0)
  const [loading, setLoading] = useState(false)

  const loadMoreData = async event => {
    const response = await server.get(`${config.api.feed}/${batchNumber}`)
    setBatchNumber(response.message.batchNumber)
    setData({ ...data, ...response.message })
  }


  // Use smart caching, should be part of server.get()
  const loadFromStorage = async () => {
    const db = database()
    const video = await db.get('video')
    
    alert(JSON.stringify(video?.video))
    setData(video?.video)
  }

  // must be a button to open fullscreen
  // add it to feedNode overlay nav
  
  const handleNodeClick = async event => {
    try {
      await (document.documentElement.requestFullscreen || document.documentElement.webkitRequestFullscreen)?.()
      await screen.orientation.lock('portrait')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <section className={styles.feed} role="feed" aria-busy={loading}>
    {/*
      <div style={{
        background: '#777',
        color: 'white',
        height: '50dvh',
        width: '100dvw',
        maxWidth: '500px',
        paddingTop: '100px',
        margin: '0 auto 16px auto'
      }}>suggestions</div>
    */}
    
      {data.map((item, index) => 
        <FeedNode key={index} item={item} index={index + 1} count={data.length} />
      )}
{/*
      {data.map((item, index) => {
        <FeedNode key={item.id} item={item} index={idex + 1} count={items.length} />
      })}
      <Sentinel onVisible={loadMoreData} />
*/}
    </section>
  )
}

export default Feed // memo(Feed)
