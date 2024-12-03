import { makeRequest } from '~/scripts/dev/apiBuilderV2'

const api_endpoint = 'dev/doQueriesV3'

export const getSites = () => 
  makeRequest(api_endpoint, 'getSites');

export const getSite = (id) => 
  makeRequest(api_endpoint, 'getSite', { id })

export const getCategories = () => 
  makeRequest(api_endpoint, 'getCategories')


export const getInfo = (url) => 
  makeRequest(api_endpoint, 'getInfo', { url })

export const getEvents = () => 
  makeRequest(api_endpoint, 'getEvents')


