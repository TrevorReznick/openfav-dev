const api_prod = import.meta.env.PUBLIC_PROD_API_URL
const api_dev = import.meta.env.PUBLIC_DEV_API_URL
const api_url = import.meta.env.MODE === 'production' ? api_prod : api_dev

interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  error?: any
}

export async function makeRequest<T = unknown>(
  endpoint: string,
  type: string,
  params?: Record<string, any>
): Promise<ApiResponse<T>> {
  try {
    const urlParams = new URLSearchParams(params).toString()
    const url = `${api_url}${endpoint}?type=${type}&${urlParams}`
    const options: RequestInit = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json()
    return { success: true, data: result }
  } catch (error) {
    console.error(`There was a problem with the request:`, error)
    return { success: false, error: (error as Error).message }
  }
}