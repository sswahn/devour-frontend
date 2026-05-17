import { useEffect } from 'react'

function useServer() {

  const post = async (api, request, headers = {}) => {
    try {
      if (typeof api !== 'string') {
        throw new TypeError('Post request expects first argument to be of type string.')
      }
      if (request && (typeof request !== 'object' || Array.isArray(request))) {
        throw new TypeError('Post request expects second argument to be of type object literal.')
      }
      if (headers && (typeof headers !== 'object' || Array.isArray(headers))) {
        throw new TypeError('Post request expects headers to be an object literal.')
      }
      const options = {
        method: 'post',
        body: JSON.stringify(request),
        headers: {
          'Content-Type': 'application/json',
          ...headers
        }
      }
      const response = await fetch(api, options)
      if (!response.ok) {
        const errorMessage = await response.text()
        throw new Error(`${response.status}: ${errorMessage}`)
      }
      // Handle 204 No Content or empty body
      if (response.status === 204 || response.headers.get('Content-Length') === '0') {
        return { success: true, message: 'No content' }
      }
      // Handle API response errors
      if (response.error) {
        throw new Error(response.error)
      }
      return response.json()
    } catch (error) {
      throw new Error(`Failed to execute POST request. ${error}`)
    }
  }
  
}

export default useServer
