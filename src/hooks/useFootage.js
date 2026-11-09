import { useContext } from 'react'
import { FootageContext } from '../components/Providers/FootageProvider'

function useFootage() {
  const { footage, setFootage } = useContext(FootageContext)

  useEffect(() => {
    if (!isHydrated) {
      return
    }
    const timer = setTimeout(async () => {
      try {
        await database().put({ id: config.storage.footage, footage })
      } catch (error) {
        throw error
      }
    }, 500) // 500ms delay window

    // CRITICAL: The cleanup function clears the previous timer if 'footage' changes again before the 500ms window expires.
    return () => {
      clearTimeout(timer)
    }
  }, [footage, isHydrated])

  return { footage, setFootage }
}

export default useFootage
