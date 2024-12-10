import { makeRequest } from '~/scripts/apiBuilderV0'

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

const newEvent = {
    id_event_type: 1,
    id_event_family: 2
}
  
const updatedEventData = {
    id: 5,
    id_event_type: 8,
    id_event_family: 2
}

const createPostEvent = async () => {
    return makeRequest(api_endpoint, 'insertEvent', {}, 'POST', newEvent)
}

const createUpdateEvent = async () => {
    return makeRequest(api_endpoint, 'updateEvent', {id: updatedEventData.id }, 'PUT', updatedEventData)
}

const fetchEvents = () => 
    makeRequest(api_endpoint, 'getEvents') //TODO
  
const fetchSites = () => 
    makeRequest(api_endpoint, 'getSites')

const fetchSiteById = (id: number) =>
    makeRequest(api_endpoint, 'getSiteById', { id: my_id })

const fetchCategories = () => 
    makeRequest(api_endpoint, 'getCategories')


const fetchSubCategories = () => 
    makeRequest(api_endpoint, 'getSubCategories')

const fetchTags = () => 
    makeRequest(api_endpoint, 'getTags')

const fetchAreas = () => 
    makeRequest(api_endpoint, 'getAreas')

/* @@ get valuse using api system 0.6.0 @@ */

//export const insertEvent = await sendApiRequest(createPostEvent)
//export const updateEvent = await sendApiRequest(createUpdateEvent)
//export const getSites = await sendApiRequest(fetchSites)  
  
/* @@ exports the results @@ */
   
//export const events = await sendApiRequest(fetchEvents) //TODO
export const sites = await sendApiRequest(fetchSites)
export const tags = await sendApiRequest(fetchTags)
export const areas = await sendApiRequest(fetchAreas)
export const categories = await sendApiRequest(fetchCategories)
export const sub_categories = await sendApiRequest(fetchSubCategories)//FIXME
export const site = await sendApiRequest(fetchSiteById)//FIXME
  

/* @@ old @@ */

const createUpdateEventOld = async () => {
    return makeRequest(api_endpoint, 'insertEvent', {}, 'POST', newEvent)
}

