const api_prod = import.meta.env.PUBLIC_PROD_API_URL
const api_dev = import.meta.env.PUBLIC_DEV_API_URL
const api_url = import.meta.env.MODE === 'production' ? api_prod : api_dev;

const BASE_URL = api_url

export async function makeRequest(endpoint, method = 'GET', params = {}, headers = {}, body = null) {

  //console.log('enter make request')

  const url = new URL(`${BASE_URL}${endpoint}`)

  //console.log('api url', url)
    
  if (method === 'GET') {

    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

  }

  const requestOptions = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers
    },
    body: body ? JSON.stringify(body) : undefined
  }

  try {
    const response = await fetch(url, requestOptions)

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      const data = await response.json()

      return { success: true, data }

    } catch (error) {
      return { success: false, error }
    }
}

export async function doGet(endpoint, params = {}, headers = {}) {
  return makeRequest(endpoint, 'GET', params, headers);
}

export async function doPost(endpoint, body, headers = {}) {
  return makeRequest(endpoint, 'POST', {}, headers, body)
}

export async function doPut(endpoint, body, headers = {}) {
  return makeRequest(endpoint, 'PUT', {}, headers, body);
}

export async function doDel(endpoint, headers = {}) {
  return makeRequest(endpoint, 'DELETE', {}, headers);
}