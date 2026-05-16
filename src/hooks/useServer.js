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
      return handleResponse(response)
    } catch (error) {
      throw new Error(`Failed to execute POST request. ${error}`)
    }
  }
  
}

export default useServer
