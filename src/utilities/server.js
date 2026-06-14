
const typeCheck = (method, api, request = {}, headers = {}) => {
  if (typeof api !== 'string') {
    throw new TypeError(`${method} request expects api to be a string.`, { cause: 'server' })
  }
  if (typeof request !== 'object' || request === null || Array.isArray(request)) {
    throw new TypeError(`${method} request expects request to be an object literal.`, { cause: 'server' })
  }
  if (typeof headers !== 'object' || headers === null || Array.isArray(headers)) {
    throw new TypeError(`${method} request expects headers to be an object literal.`, { cause: 'server' })
  }
}

const handleResponse = async response => {
  if (!response.ok) {
    const errorMessage = await response.text()
    throw new Error(`${response.status}: ${errorMessage}`, { cause: 'server' })
  }
  // Handle 204 No Content or empty body
  if (response.status === 204 || response.headers.get('Content-Length') === '0') {
    console.log('server response: No Content: ', response)
    return { success: true, message: 'No content' }
  }
  // Handle API response errors
  if (response.error) {
    throw new Error(response.error, { cause: 'server' })
  }
  return response.json()
}

const server = {
  async get(api, headers = {}) {
    const request = {}
    typeCheck('get', api, request, headers)
    const options = {
      method: 'get',
      headers: { ...headers }
    }
    const response = await fetch(api, request)
    return handleResponse(response)
  },
  async post(api, request, headers = {}) {
    typeCheck('post', api, request, headers)
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
  },
  async put(api, request, headers = {}) {
    typeCheck('put', api, request, headers)
    const options = {
      method: 'put',
      body: JSON.stringify(request),
      headers: {
        'Content-Type': 'application/json',
        ...headers
      }
    }
    const response = await fetch(api, options)
    return handleResponse(response)
  },
  async remove(api, headers = {}) {
    typeCheck('delete', api, undefined, headers)
    const options = {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
        ...headers
      }
    }
    const response = await fetch(api, options)
    return handleResponse(response)
  }
}

export default server
