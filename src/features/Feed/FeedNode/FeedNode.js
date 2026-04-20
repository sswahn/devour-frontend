import { memo } from 'react'
import OverlayButtons from '../OverlayButtons/OverlayButtons'

function FeedNode({ onClick, item, index, count }) {
  
  const data = {
    videoUrl: item.videoUrl || '',
    caption: item.caption || ''
  }

  // this tabIndex etc. breaks the natural flow of the page, header gets skipped...
  
  return (
    <article onClick={onClick} tabIndex={index} aria-posinset={index} aria-setsize={count}>
      <header>
{/*
        <AuthorButton />
        <LocationButton />

        Change 'data' back to 'item'
*/}
      </header>
        <figure style={{ background: '#666', borderRadius: '10px', height: '100%', width: '100%' }}>
          {data.videoUrl && <video ref={ref} src={data.videoUrl} preload="metadata" muted playsInline loop />}
          {data.caption ?? <figcaption>{data.caption}</figcaption>}
        </figure>
      <footer>
        // static captions, meta text, etc.
      </footer>
      <OverlayButtons />
    </article>
  )
}

export default FeedNode // memo(FeedNode)
