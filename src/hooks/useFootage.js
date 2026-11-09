import { useContext } from 'react'
import { FootageContext } from '../components/Providers/FootageProvider'
import database from '../utilities/database'

function useFootage() {
  const { footage, setFootage } = useContext(FootageContext)

  const loadFootage = async () => {
    const data = await database().get('footage')
    setFootage(data?.footage ?? [])
  }

  return { footage, setFootage, loadFootage }
}

export default useFootage
