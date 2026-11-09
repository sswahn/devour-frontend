import { useContext, useEffect } from 'react'
import { FootageContext } from '../components/Providers/FootageProvider'
import database from '../utilities/database'
import * as config from '../config'

function useFootage() {
  const { footage, setFootage } = useContext(FootageContext)
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    if (footage.length > 0) {
      return
    }
    
    const load = async () => {
      try {
        const data = await database().get(config.storage.footage)
        setFootage(data?.footage ?? [])
      } catch (error) {
        throw error
      } finally {
        setIsHydrated(true)
      }
    }
    load()
  }, [setFootage])

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
