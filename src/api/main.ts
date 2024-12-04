import {getMain} from '~/scripts/requests'

export const recordLinks = await getMain()

//console.log('data', recordLinks)

/*

import { getCategories, getItem, getMain, getLists } from '~/scripts/requests'
import { numElements, mapItem } from '~/scripts/oopps'

const metadata = {
  title: 'OpenFav Dashboard',
}

fetch db 

const categories = await getCategories()
const mainData = await getMain()
const lists = await getLists()

/* map results 

const areas = mapItem(categories, 'area')

/* get num items 

const numSites = numElements(mainData)
const numAreas = numElements(areas)
const numLists = numElements(lists)

*/

