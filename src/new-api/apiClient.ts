import { makeRequest } from '~/scripts/new-dev/apiBuilder'

const api_endpoint = 'dev/doQueriesV1'

const newEvent = {
  event_type: 5,
  event_family: 2
}

const updatedEventData = {
  event_type: 7,
  event_family: 2
}

/*
export async function initializeData() {
  try  {
    const insertEvent = async (eventData) => {
      return makeRequest('dev/doQueriesV0', 'insertEvent', {}, 'POST', eventData)
    }

    const eventInsertResponse = await insertEvent(newEvent)

    if (eventInsertResponse.success && eventInsertResponse.data) {
      const insertedEvent = eventInsertResponse.data
      console.log("Evento inserito:", insertedEvent)
    }
  } catch(e) 
    {
      console.log('error', e)
    }
}
*/
export async function initializeData() {

  console.log('hello')

  try {
    
    console.log('enter here? ')

    const insertEvent = async (eventData) => {
      console.log('launch request')  
      return makeRequest(api_endpoint, 'insertEvent', {}, 'POST', eventData)
    }

    const eventInsertResponses = await insertEvent(newEvent);

    if (eventInsertResponses.success && eventInsertResponses.data) {
        const insertedEvent = eventInsertResponses.data
        console.log("Evento inserito:", insertedEvent)
    }
  } catch (e) {
      console.log('or here? ')
      console.log('Errore generale:', e)
  }
  
    /* se ho un array di eventi
    const insertEvents = async (events) => {
      const responses = await Promise.all(events.map(event => insertEvent(event)))
      return responses
    }
    const eventInsertResponses = await insertEvents(newEvents);
    eventInsertResponses.forEach((response, index) => {
      if (response.success && response.data) {
        const insertedEvent = response.data;
        console.log(`Evento ${index + 1} inserito:`, insertedEvent)
      } else {
        console.log(`Errore nell'inserimento dell'evento ${index + 1}:`, response)
      }
    })
    */
}

