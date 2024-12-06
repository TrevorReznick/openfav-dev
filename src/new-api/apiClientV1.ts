import { makeRequest } from '~/scripts/new-dev/apiBuilderV0'

const api_endpoint = 'dev/doQueriesNew'

export const fetchEventsAndSites = async (fetchFunc) => {

    try {
        const response = await fetchFunc()

        //console.log("Risposta API:", response) // Aggiungi questo log

        if (response.success) {
            return response.data
        } else {
            throw new Error("Errore nella risposta dell'API");
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
    event_type: 7,
    event_family: 2
}

const createPostEvent = async () => {
    return makeRequest(api_endpoint, 'insertEvent', {}, 'POST', newEvent)
}

export const insertEvent = await fetchEventsAndSites(createPostEvent)

