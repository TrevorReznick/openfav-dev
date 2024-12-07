import { makeRequest } from '~/scripts/old/apiBuilder'

const api_endpoint = 'dev/doQueriesV3'

/* @@ init functions @@ */

const getSites = () => 
  makeRequest(api_endpoint, 'getSites');

const getSite = (id) => 
  makeRequest(api_endpoint, 'getSite', { id })

const getCategories = () => 
  makeRequest(api_endpoint, 'getCategories')


const getInfo = (url) => 
  makeRequest(api_endpoint, 'getInfo', { url })

const getEventsTest = () => 
  makeRequest(api_endpoint, 'getEventsTest')

const getSitesTest = () => 
  makeRequest(api_endpoint, 'getSitesTest')

/* @@ execute the api builder @@ */

export const fetchEventsAndSites = async (fetchFunc) => {
  try {
    const response = await fetchFunc();

    // Assumiamo che la risposta abbia sempre la struttura { success: true, data: { success: true, data: [Object] } }
    if (response.success && response.data.success) {
      return response.data.data;
    } else {
      throw new Error("Errore nella risposta dell'API");
    }
  } catch (error) {
    console.error("Errore durante la fetch dei dati:", error);
    throw error; // Rilancia l'errore per gestirlo ulteriormente se necessario
  }
}
 /* @@ exports the results @@ */
 
export const events = await fetchEventsAndSites(getEventsTest)
export const sites = await fetchEventsAndSites(getSitesTest)

//console.log("Events:", events)*/
//console.log("Sites:", sites)



