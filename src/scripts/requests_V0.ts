const api_prod = import.meta.env.PUBLIC_PROD_API_URL
const api_dev = import.meta.env.PUBLIC_DEV_API_URL
const api_url = import.meta.env.MODE == 'production' ? api_prod : api_dev

console.log('API URL:', api_url)

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

export const getCategories_old = async () => {   
  try {
    const response = await fetch(api_url + 'categories')
    const data = await response.json()
    return data
  } catch (error) {
    console.log('error 1...')
    console.error(error)
  }
}

export const getInfo = async (url: string) => {
  
  try {
    const response = await fetch(api_url + 'info?url=' + url)
    const data = await response.json()
    //const base64Image = data.data.image    
    return data
  } catch (error) {
    console.error(error)
  }
}

export const getItem = async (id: number) => {
  try {
    const response = await fetch(`${api_url}/item/${id}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

export const getLists = async () => {
  try {
    const response = await fetch(api_url + 'lists') 
    console.log(api_url + 'lists')
    const data = await response.json()
    return data
  } catch (error) {
    console.log('error here')
    console.error(error)
  }
}

export const getMain = async () => {
  try {
    const response = await fetch(api_url + 'main')
    const data = await response.json()
    return data
  } catch (error) {
    console.log('error 2...')
    console.error(error)
  }
}

export const getProviders = async () => {
  try {
    const response = await fetch(api_url + 'providers')
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }

}

export const getSubCategories = async () => {
  try {
    const response = await fetch(api_url + 'sub-category')
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }

}

export async function sendData(data: PostData) {
  try {
    const response = await fetch(api_url + 'main', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const result = await response.json()    
    return { success: true, data: result }
  } catch (error: any) {
    console.error('There was a problem with the fetch operation:', error)
    return { success: false, error: error.message }
  }
}

export async function updateData(data: SubMainFormData) {
  //console.log('hello from request')
  //console.log('data', data)
  try {
    const response = await fetch(api_url + 'update_sub_table', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({data}),
    })
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const result = await response.json()
    console.log('update result data', result)
    return { success: true, data: result }
  } catch(error: any) {
    console.error('There was a problem with the update operation:', error)
    return { success: false, error: error.message }
  }
}


    
    
