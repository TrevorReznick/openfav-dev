import { makeRequest } from '~/scripts/dev/apiBuilderV3'
export async function initializeData() {
    try {
      const insertEvent = async (eventData) => {
        return makeRequest('dev/doQueriesV0', 'insertEvent', {}, 'POST', eventData)
      };
  
      const insertEvents = async (events) => {
        const responses = await Promise.all(events.map(event => insertEvent(event)))
        return responses;
      };
  
      const newEvents = [
        // Esempio di array di eventi
        { name: 'Evento 1', date: '2023-10-01' },
        { name: 'Evento 2', date: '2023-10-02' },
        // Aggiungi altri eventi qui
      ];
  
      const eventInsertResponses = await insertEvents(newEvents);
  
      eventInsertResponses.forEach((response, index) => {
        if (response.success && response.data) {
          const insertedEvent = response.data;
          console.log(`Evento ${index + 1} inserito:`, insertedEvent)
        } else {
          console.log(`Errore nell'inserimento dell'evento ${index + 1}:`, response)
        }
      })
    } catch (e) {
      console.log('Errore generale:', e)
    }
  }