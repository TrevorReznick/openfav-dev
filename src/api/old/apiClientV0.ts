// ~/scripts/clientApi.js

import { doGet, doPost, doPut, doDel } from '~/scripts/old/new-dev/apiBuilder'

const api_endpoint = 'main/old/doQueriesV1'

const newEvent = {
    id_event_type: 1,
    id_event_family: 2
  }
  
  const updatedEventData = {
    event_type: 7,
    event_family: 2
  }



export async function createEvent() {
  return doPost(`${api_endpoint}?table=event_log`, newEvent, {})
}

export async function updateEvent(id, eventData) {
  return doPut(`doQueriesV0/${id}`, eventData);
}


// Aggiungi altre funzioni per altre entità secondo necessità