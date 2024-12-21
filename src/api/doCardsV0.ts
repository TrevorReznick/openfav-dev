import { createUrlsCard, createListsCard, createActivityCard } from '~/scripts/cardClass'
import * as api from '~/api/apiClient'
//import { events } from '~/api/old/doApis'
import * as apiV0 from '~/api/apiClientV0'


const get_events: any = await apiV0.fetchElements('getEvents')
const get_lists: any = await apiV0.fetchElements('getLists')

console.log('new api consumer', get_lists.data.data)

const events = get_events.data.data
const my_events: any = events.slice(0, 5)

/* get @@ remote data @@ */

// const my_events: any = events

const my_lists: any = get_lists.data.data

/* Create URLs Card */
const evUrlsCard = createUrlsCard('my-url-card')

evUrlsCard.updateCard({
  cardTitle: 'Last Insertions',
  action_url: '/last-insertions',
  cardIcon: 'link',
})

const urlsEvents = my_events.filter((event) => {
  return event.event_type.event_type === 'urls'
})

urlsEvents.forEach((event) => {
  evUrlsCard.addActivity(
    event.event_type.event_description,
    event.event_type.event_description, // Usiamo la descrizione dell'evento come azione
    event.event_type.event_description, // Usiamo la descrizione dell'evento come URL
    'enzonav'
  )
})

export const ev_urls_card = evUrlsCard.getCardData()

/* Create Lists Card */
const evListsCard = createListsCard('my-event-list-card')

evListsCard.updateCard({
  cardTitle: 'Personal Lists',
  action_url: '/todo-lists',
  cardIcon: 'folder',
})

const listsEvents = events.filter((event) => {
  return event.event_type.event_type === 'lists'
})

listsEvents.forEach((event) => {
  evListsCard.addActivity(
    event.event_type.event_description,
    event.event_type.event_description, // Usiamo la descrizione dell'evento come azione
    event.event_type.event_description, // Usiamo la descrizione dell'evento come URL
    'enzonav'
  )
})

export const ev_lists_card = evListsCard.getCardData()

/* Create New Lists Card */
const listsCard = createListsCard('my-list-card')

listsCard.updateCard({
  cardTitle: 'My Lists',
  action_url: '/todo-lists',
  cardIcon: 'folder',
})

my_lists.forEach((item) => {
  listsCard.addActivity(
    item.name,
    item.name, // Usiamo il nome dell'elemento come azione
    item.name, // Usiamo il nome dell'elemento come URL
    'you'
  )
})

export const lists_card = listsCard.getCardData()