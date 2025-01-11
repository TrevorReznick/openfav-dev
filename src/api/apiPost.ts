const redis_session_api_url = import.meta.env.PUBLIC_REDIS_API_URL;

interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: any;
}

/**
 * Effettua una richiesta POST al Redis Session API
 * @param endpoint - Endpoint specifico (es: "/sessions")
 * @param payload - Oggetto payload da inviare nel corpo della richiesta
 * @returns Promessa con ApiResponse
 */
export async function postRequest<T>(  
  payload: Record<string, any>
): Promise<ApiResponse<T>> {
  try {
    const url = redis_session_api_url
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return {
        success: false,
        error: `HTTP Error: ${response.status} - ${response.statusText}`,
      };
    }

    const data = (await response.json()) as T

    return {
      success: true,
      data,
    }
  } catch (error) {
    return {
      success: false,
      error,
    }
  }
}



/*
const updatedEventData = {
    id: 235,
    id_event_type: 3,
    id_event_family: 2,
}

export const createPostEvent = async (data) => {
    return makeRequest(api_endpoint, 'insertEvent', {}, 'POST', data)
}
*/