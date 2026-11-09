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
  }, [footage, setFootage])

  useEffect(() => {
    if (!isHydrated) {
      return
    }
    database().put({ id: config.storage.footage, footage })
  }, [footage])

  return { footage, setFootage }
}

export default useFootage
