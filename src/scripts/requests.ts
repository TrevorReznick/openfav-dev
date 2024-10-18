const api_prod = import.meta.env.PUBLIC_PROD_API_URL
const api_dev = import.meta.env.PUBLIC_DEV_API_URL
const api_url = import.meta.env.MODE == 'production' ? api_prod : api_dev

console.log('API URL:', api_url)

type RequestType =
  | 'getCategories'
  | 'getInfo'
  | 'getItem'
  | 'getLists'
  | 'getMain'
  | 'getProviders'
  | 'getSubCategories'
  | 'sendData'
  | 'updateData'

  export const apiRequest = async (type: RequestType, ...args: any[]): Promise<any> => {
    switch (type) {
        case 'getCategories':
            return await getCategories()
        /*
        case 'getInfo':
            return await getInfo(args[0]) // passa l'URL come argomento
        case 'getItem':
            return await getItem(args[1])// passa l'ID come argomento
        case 'getLists':
            return await getLists()
        case 'getMain':
            return await getMain()
        case 'getProviders':
            return await getProviders()
        case 'getSubCategories':
            return await getSubCategories()
        */
        /*
        case 'sendData':
            return await sendData(args[0])// passa i dati come argomento
        case 'updateData':
            return await updateData(args[0])// passa i dati come argomento
        */
        default:
            throw new Error('Invalid request type')
    }
}

export async function getCategories() {
    try {
      const response = await fetch(api_url + 'categories');
      const text = await response.text();
      
      if (text.includes('FUNCTION_INVOCATION_FAILED')) {
        console.error('Function invocation failed:', text);
        return []; // o qualsiasi valore di fallback appropriato
      }
      
      return JSON.parse(text)
    } catch (error) {
      console.error('Error fetching categories:', error)
      return []; // o qualsiasi valore di fallback appropriato
    }
}