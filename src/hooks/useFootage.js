import { useContext } from 'react'
import { FootageContext } from '../components/Providers/FootageProvider'

function useFootage() {
  const { footage, setFootage, duration, setDuration } = useContext(FootageContext)

  return { footage, setFootage, duration, setDuration }
}

export default useFootage
