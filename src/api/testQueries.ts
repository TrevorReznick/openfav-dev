// Funzione per inizializzare i dati

import { makeRequest } from '~/scripts/apiBuilderV0'

const newEvent = {
  event_type: 5,
  event_family: 2
}

const updatedEventData = {
  event_type: 7,
  event_family: 2
}

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

   

      