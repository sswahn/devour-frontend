import { useContext } from 'react'
import { CommentsContext } from '../components/Providers/CommentsProvider'

function useComments() {
  const [comments, setComments] = useContext(CommentsContext)

  return { comments, setComments }
}

export default useComments
