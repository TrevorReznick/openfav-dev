import { makeRequest } from '~/scripts/dev/apiBuilderV0';

export const getSites = () => 
  makeRequest('dev/doQueriesV2', 'getMain');

export const getCategories = () => 
  makeRequest('dev/doQueriesV2', 'getCategories')

export const getEvents = () => 
  makeRequest('dev/doQueriesV2', 'getEvents');

export const getSite = (id) => 
  makeRequest('dev/doQueriesV2', 'getSite', {id});

export const getInfo = (url) => 
  makeRequest('dev/doQueriesV2', 'getInfo', { url });