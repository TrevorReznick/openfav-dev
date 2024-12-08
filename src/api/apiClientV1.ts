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

const getEventsTest = () => 
    makeRequest(api_endpoint, 'getEventsTest')
  
const getSitesTest = () => 
    makeRequest(api_endpoint, 'getSitesTest')

/* @@ get valuse using api system 0.6.0 @@ */

export const insertEvent = await sendApiRequest(createPostEvent)
export const updateEvent = await sendApiRequest(createUpdateEvent)


  
  /* @@ execute the api builder @@ */
  
  
   /* @@ exports the results @@ */
   
  export const events = await sendApiRequest(getEventsTest)
  export const sites = await sendApiRequest(getSitesTest)
  

/* @@ old @@ */

const createUpdateEventOld = async () => {
    return makeRequest(api_endpoint, 'insertEvent', {}, 'POST', newEvent)
}

