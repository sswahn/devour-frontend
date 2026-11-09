import { useContext } from 'react'
import { FootageContext } from '../components/Providers/FootageProvider'
import database from '../utilities/database'
import * as config from '../config'

function useFootage() {
  const { footage, setFootage } = useContext(FootageContext)

  const loadFootage = async () => {
    const data = await database().get(config.storage.footage)
    setFootage(data?.footage ?? [])
  }

  return { footage, setFootage, loadFootage }
}

export default useFootage
