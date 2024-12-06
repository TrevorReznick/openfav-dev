// ~/scripts/clientApi.js

import { get, post, put, del } from '~/scripts/new-dev/apiBuilder'

const api_endpoint = 'dev/doQueriesV1'

const newEvent = {
    event_type: 5,
    event_family: 2
  }
  
  const updatedEventData = {
    event_type: 7,
    event_family: 2
  }

// Funzioni per gestire le operazioni sui eventi
export async function getEvents(params = {}) {
  return get(api_endpoint, params);
}

export async function createEvent(eventData) {
  return post(api_endpoint, {}, {}, newEvent);
}

export async function updateEvent(id, eventData) {
  return put(`doQueriesV0/${id}`, eventData);
}

export async function deleteEvent(id) {
  return del(`doQueriesV0/${id}`);
}

// Funzioni per gestire le operazioni sugli utenti
export async function getUsers(params = {}) {
  return get(api_endpoint, params);
}

export async function createUser(userData) {
  return post(api_endpoint, userData);
}

export async function updateUser(id, userData) {
  return put(`doQueriesV0/${id}`, userData);
}

export async function deleteUser(id) {
  return del(`doQueriesV0/${id}`);
}

// Funzioni per gestire le operazioni con Supabase
export async function getEventsFromSupabase(params = {}) {
  return get(api_endpoint, params, { useSupabase: true });
}

export async function createEventInSupabase(eventData) {
  return post(api_endpoint, eventData, { useSupabase: true });
}

export async function updateEventInSupabase(id, eventData) {
  return put(`${api_endpoint}/${id}`, eventData, { useSupabase: true });
}

export async function deleteEventFromSupabase(id) {
  return del(`${api_endpoint}/${id}`, { useSupabase: true });
}

// Aggiungi altre funzioni per altre entità secondo necessità