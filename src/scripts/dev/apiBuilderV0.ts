const api_prod = import.meta.env.PUBLIC_PROD_API_URL;
const api_dev = import.meta.env.PUBLIC_DEV_API_URL;
const api_url = import.meta.env.MODE === 'production' ? api_prod : api_dev;

interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  error?: any
}

export async function makeRequest<T = unknown>(
  endpoint: string,
  method: 'GET' | 'POST' = 'GET',
  data?: unknown
): Promise<ApiResponse<T>> {
  try {
    const url = `${api_url}${endpoint}`;
    const options: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (data) {
      options.body = JSON.stringify(data)
    }

    const response = await fetch(url, options)

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const result = await response.json()
    return { success: true, data: result }
  } catch (error) {
    console.error(`There was a problem with the ${method} operation:`, error)
    return { success: false, error: (error as Error).message }
  }
}



