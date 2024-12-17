import { makeRequest } from '~/scripts/apiBuilder';

const api_endpoint = 'main/doQueries';

export const sendApiRequest = async (fetchFunc) => {
    try {
        const response = await fetchFunc();
        if (response.success) {
            return response.data;
        } else {
            throw new Error("Errore nella risposta dell'API");
        }
    } catch (error) {
        throw error;
    }
};

const my_id = 49;

const ids = [66, 65, 64];

const newEvent = {
    id_event_type: 1,
    id_event_family: 2,
};

const updatedEventData = {
    id: 5,
    id_event_type: 8,
    id_event_family: 2,
};

/* @@ -- GET methods -- @@ */

export const fetchElements = (type: string) => 
    makeRequest(api_endpoint, type)

/*
export const fetchAreas = () => 
    makeRequest(api_endpoint, 'getAreas');
*/

export const fetchAreasCategoriesSubCategories = () => 
    makeRequest(api_endpoint, 'getCategoriesJson');

export const fetchCategories = () => 
    makeRequest(api_endpoint, 'getCategories');

export const fetchEvents = () => 
    makeRequest(api_endpoint, 'getEvents'); //TODO

export const fetchSites = () => 
    makeRequest(api_endpoint, 'getSites');

export const fetchSiteById = (id: number) =>
    makeRequest(api_endpoint, 'getSiteById', { id });

export const fetchSubCategories = () => 
    makeRequest(api_endpoint, 'getSubCategories');

export const fetchTags = () => 
    makeRequest(api_endpoint, 'getTags');

/* @@ -- POST methods -- @@ */

export const createPostEvent = (data, table) => 
    makeRequest(api_endpoint, table, {}, 'POST', data)

/* @@ -- PUT methods -- @@ */

export const createUpdateEvent = () => 
    makeRequest(api_endpoint, 'updateEvent', { id: updatedEventData.id }, 'PUT', updatedEventData);

/* @@ -- DEL methods -- @@ */

export const delEvent = (id: number) => 
    makeRequest(api_endpoint, 'deleteEvent', { id }, 'DELETE', {});