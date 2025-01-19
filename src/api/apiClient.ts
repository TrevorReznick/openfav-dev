import { makeRequest } from '~/scripts/apiBuilder'

const api_endpoint = 'main/doQueries'

export const sendApiRequest = async (fetchFunc) => {
    try {
        const response = await fetchFunc();
        if (response.success) {
            return response.data;
        } else {
            throw new Error("Errore nella risposta dell'API")
        }
    } catch (error) {
        throw error;
    }
};

/* @@ -- GET methods -- @@ */

export const fetchElements = (type: string) => 
    makeRequest(api_endpoint, type)

export const fetchElement = (type: string, id: number) =>
    makeRequest(api_endpoint, type, { id })


/* @@ -- POST methods -- @@ */

export const createPostEvent = async (data) => {
    return makeRequest(api_endpoint, 'insertEvent', {}, 'POST', data)
}

/* @@ -- PUT methods -- @@ */

export const createUpdateEvent = async (data: any) => {
    return makeRequest(api_endpoint, 'updateEvent', {id: data.id }, 'PUT', data)
}

/* @@ -- DEL methods -- @@ */

export const deleteEvent = (id: number) => 
    makeRequest(api_endpoint, 'deleteEvent', { id }, 'DELETE', {})

export const deleteSite = (id: number) => 
    makeRequest(api_endpoint, 'deleteSite', { id }, 'DELETE', {})