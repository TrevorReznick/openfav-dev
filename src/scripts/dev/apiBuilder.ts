import { z } from 'zod';

const api_prod = import.meta.env.PUBLIC_PROD_API_URL;
const api_dev = import.meta.env.PUBLIC_DEV_API_URL;
const api_url = import.meta.env.MODE === 'production' ? api_prod : api_dev;

// Define a schema for the API response
const ApiResponseSchema = z.object({
  success: z.boolean(),
  data: z.unknown().optional(),
  error: z.string().optional(),
});

type ApiResponse = z.infer<typeof ApiResponseSchema>;

// Generic function to make API requests
async function makeRequest<T>(endpoint: string, method: 'GET' | 'POST' = 'GET', data?: unknown): Promise<ApiResponse> {
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
    return ApiResponseSchema.parse({ success: true, data: result });
  } catch (error) {
    console.error(`There was a problem with the ${method} operation:`, error);
    return ApiResponseSchema.parse({ success: false, error: (error as Error).message });
  }
}

// Specific API functions
export const sendData = (data: PostData) => makeRequest('main', 'POST', data);
export const updateData = (data: SubMainFormData) => makeRequest('update_sub_table', 'POST', { data });
export const getCategories = () => makeRequest('main/categories');
export const getInfo = (url: string) => makeRequest(`info?url=${encodeURIComponent(url)}`);
export const getItem = (id: number) => makeRequest(`item/${id}`);
export const getLists = () => makeRequest('lists');
export const getMain = () => makeRequest('main/main');
export const getSubCategories = () => makeRequest('sub-category');
export const getProviders = () => makeRequest('providers');
export const getEvents = () => makeRequest('main/events');

// Types (you should define these based on your actual data structures)
type PostData = unknown;
type SubMainFormData = unknown;
