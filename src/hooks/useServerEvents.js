import { useState, useEffect } from 'react'
import { api } from '../config'

function useServerEvents() {
  const { data, setData } = useState()
  const eventSource = new EventSource(api.main)
  
  const onMessage = event => {
    setData(
      JSON.parse(event.data)
    )
  }

  const onError = event => {
    console.error('error from useServerEvents: ', event)
    eventSource.close()
  }
  
  useEffect(() => {
    eventSource.addEventListener('message', onMessage)
    eventSource.addEventListener('error', onError)
    return () => {
      eventSource.removeEventListener('message', onMessage)
      eventSource.removeEventListener('error', onError)
    }
  }, [])

  return { data }
}
