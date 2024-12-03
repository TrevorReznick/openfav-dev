// api.ts

const api_prod = import.meta.env.PUBLIC_PROD_API_URL;
const api_dev = import.meta.env.PUBLIC_DEV_API_URL;
const api_url = import.meta.env.MODE === 'production' ? api_prod : api_dev;

interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}

async function makeRequest<T>(endpoint: string, method: 'GET' | 'POST' = 'GET', data?: unknown): Promise<ApiResponse<T>> {
  try {
    const url = `${api_url}${endpoint}`;
    const options: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (data) {
      options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json();
    return { success: true, data: result };
  } catch (error) {
    console.error(`There was a problem with the ${method} operation:`, error);
    return { success: false, error: (error as Error).message };
  }
}

// Definisci i tipi per i tuoi dati
interface PostData {
  // Definisci la struttura dei tuoi dati qui
}

interface SubMainFormData {
  // Definisci la struttura dei tuoi dati qui
}

// Funzioni API specifiche
//export const sendData = (data: PostData) => makeRequest<PostData>('main/main', 'POST', data);
//export const updateData = (data: SubMainFormData) => makeRequest<SubMainFormData>('update_sub_table', 'POST', { data });
export const getCategories = () => makeRequest<any[]>('main/categories')
export const getInfo = (url: string) => makeRequest<any>(`info?url=${encodeURIComponent(url)}`);
//export const getItem = (id: number) => makeRequest<any>(`item/${id}`);
//export const getLists = () => makeRequest<any[]>('lists');
export const getMain = () => makeRequest<any>('main/main');
//export const getSubCategories = () => makeRequest<any[]>('sub-category');
//export const getProviders = () => makeRequest<any[]>('providers');
export const getEvents = () => makeRequest<any[]>('main/events');