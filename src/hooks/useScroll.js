import { useContext } from 'react'
import { ScrollContext } from '../components/Providers/ScrollProvider'

function useScroll() {
  const { subscribe, scrollRef, setScrollRef } = useContext(ScrollContext)

  return { subscribe, scrollRef, setScrollRef }
}

export default useScroll
