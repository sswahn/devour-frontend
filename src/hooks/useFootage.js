import { useContext, useEffect } from 'react'
import { FootageContext } from '../components/Providers/FootageProvider'
import database from '../utilities/database'
import * as config from '../config'

function useFootage() {
  const { footage, setFootage } = useContext(FootageContext)

  useEffect(() => {
    const load = async () => {
      if (footage.length > 0) {
        return footage
      }
      const data = await database().get(config.storage.footage)
      setFootage(data?.footage ?? [])
    }
    load()
  }, [setFootage])

  return { footage, setFootage }
}

export default useFootage
