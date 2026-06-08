import { useContext } from 'react'
import { FootageContext } from '../components/Providers/FootageProvider'

function useFootage() {
  const { footage, setFootage } = useContext(FootageContext)

  return { footage, setFootage }
}

export default useFootage
