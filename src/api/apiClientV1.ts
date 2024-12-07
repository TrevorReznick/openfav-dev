import { makeRequest } from '~/scripts/apiBuilderV0'

const api_endpoint = 'main/doQueries'

export const fetchEventsAndSites = async (fetchFunc) => {

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
};

//export const insertEvent = await fetchEventsAndSites(createPostEvent)
export const updateEvent = await fetchEventsAndSites(createUpdateEvent)

const createUpdateEventOld = async () => {
    return makeRequest(api_endpoint, 'insertEvent', {}, 'POST', newEvent)
}

