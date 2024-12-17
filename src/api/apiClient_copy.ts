import { makeRequest } from '~/scripts/apiBuilder'

const api_endpoint = 'main/doQueries'

export const sendApiRequest = async (fetchFunc) => {

    try {
        const response = await fetchFunc()
        //console.log("Risposta API:", response) // Aggiungi questo log
        if (response.success) {
            return response.data
        } else {
            throw new Error("Errore nella risposta dell'API")
        }
    } catch (error) {
        //console.error("Errore nella chiamata API:", error)
        throw error
    }
}

const my_id = 49

const ids = [66, 65 , 64]

const newEvent = {
    id_event_type: 1,
    id_event_family: 2
}
  
const updatedEventData = {
    id: 5,
    id_event_type: 8,
    id_event_family: 2
}

/* @@ -- GET methods -- @@ */

const fetchAreas = () => 
    makeRequest(api_endpoint, 'getAreas')

const fetchAreasCategoriesSubCategories = () => 
    makeRequest(api_endpoint, 'getCategoriesJson')

const fetchCategories = () => 
    makeRequest(api_endpoint, 'getCategories')

const fetchEvents = () => 
    makeRequest(api_endpoint, 'getEvents') //TODO

const fetchSites = () => 
    makeRequest(api_endpoint, 'getSites')

const fetchSiteById = (id: number) =>
    makeRequest(api_endpoint, 'getSiteById', { id: my_id })

const fetchSubCategories = () => 
    makeRequest(api_endpoint, 'getSubCategories')

const fetchTags = () => 
    makeRequest(api_endpoint, 'getTags')

/* @@ -- POST methods -- @@ */

const createPostEvent = async () => {
    return makeRequest(api_endpoint, 'insertEvent', {}, 'POST', newEvent)
}

/* @@ -- PUT methods -- @@ */

const createUpdateEvent = async () => {
    return makeRequest(api_endpoint, 'updateEvent', {id: updatedEventData.id }, 'PUT', updatedEventData)
}

/* @@ -- DEL methods -- @@ */

const delEvent = async (id: number) => {
    return makeRequest(api_endpoint, 'deleteEvent', {id: id }, 'DELETE', {})
}
  
   
//export const events = await sendApiRequest(fetchEvents) //TODO

/* @@ -- GET methods -- @@ */
export const areas = await sendApiRequest(fetchAreas)
export const categories = await sendApiRequest(fetchCategories)
export const getSites = await sendApiRequest(fetchSites)
export const sites = await sendApiRequest(fetchSites)
export const site = await sendApiRequest(fetchSiteById)
export const sub_categories = await sendApiRequest(fetchSubCategories) //FIXME
export const tags = await sendApiRequest(fetchTags)
export const all_categories = await sendApiRequest(fetchAreasCategoriesSubCategories)

/* @@ -- POST methods -- @@ */
export const insertEvent = await sendApiRequest(createPostEvent)

/* @@ -- PUT methods -- @@ */
export const updateEvent = await sendApiRequest(createUpdateEvent)

/* @@ -- DEL methods -- @@ */
export const deleteEvent = await sendApiRequest(delEvent)
  


