import { useContext } from 'react'
import { ContentContext } from '../components/Providers/ContentContext'

function useContent() {
  const [content, setContent] = useContext(ContentContext)

  return { content, setContent }
}

export default useContent
