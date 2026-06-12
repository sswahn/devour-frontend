
const typeCheck = (method, api, request = undefined, headers = {}) => {
  if (typeof api !== 'string') {
    throw new TypeError(`${method} request expects first argument to be of type string.`, { cause: 'server' })
  }
  if (request && (typeof request !== 'object' || Array.isArray(request))) {
    throw new TypeError(`${method} request expects second argument to be of type object literal.`, { cause: 'server' })
  }
  if (headers && (typeof headers !== 'object' || Array.isArray(headers))) {
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
    typeCheck('get', api, undefined, headers)
    const request = new Request(api, {
      method: 'get',
      headers: { ...headers }
    })
    const response = await fetch(request)
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
  async delete(api, headers = {}) { // delete is a keyword, consider changing
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
