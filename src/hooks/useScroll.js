import { useContext } from 'react'
import { ScrollContext } from '../components/Providers/ScrollProvider'

function useScroll() {
  const { getScrollRef, setScrollRef } = useContext(ScrollContext)

  return { getScrollRef, setScrollRef }
}

export default useScroll
