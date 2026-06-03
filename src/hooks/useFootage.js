import { useContext } from 'react'
import { FootageContext } from '../components/Providers/FootageProvider'

function useFootage() {
  const { content, setContent } = useContext(FootageContext)

  return { content, setContent }
}

export default useFootage
