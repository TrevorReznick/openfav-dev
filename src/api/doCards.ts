import { createUrlsCard, createListsCard } from '~/scripts/cardClass'
import * as api from '~/api/apiClient'
import {events} from '~/api/old/doApis'
import * as store from '~/store'
import {timeManager} from '~/scripts/third-parts/dateFormatter'

console.log('Featured Events:', events)
console.log('Featured Lists:', api.lists.data)

/* get @@ remote data @@ */

const user_name = store.user_name.get()

//const my_events: any = events
const my_events: any = events.slice(0, 5)
const my_lists: any = api.lists.data

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
    'action',
    'action 1',//TODO
    user_name
  )
})

export const ev_urls_card = evUrlsCard.getCardData()

const evListsCard = createListsCard('my-event-list-card')

evListsCard.updateCard({
  cardTitle: 'Personal Lists',
  action_url: '/todo-lists',
  cardIcon: 'folderHeart',
})

const listsEvents = events.filter((event) => {
  return event.event_type.event_type === 'lists';
})

listsEvents.forEach((event) => {
  if (!event.created_at) {
    console.error('Timestamp is undefined or empty for item:', event);
    return // Salta l'elemento corrente se il timestamp è undefined o vuoto
  }

  const timestamp = event.created_at.toString();
  const dateManager = timeManager(timestamp)
  console.log('my date', dateManager.format('dd MMMM yyyy'))
  evListsCard.addActivity(
    event.event_type.event_description,
    null,
    null,//TODO
    user_name
  );
})

export const ev_lists_card = evListsCard.getCardData()

/* @@ new lists card @@ */

const listsCard = createListsCard("my-list-card")

listsCard.updateCard({
  cardTitle: 'My Lists',
  action_url: '/todo-lists',
  cardIcon: 'list',
})

/*const myListsEvents = events.filter((event) => {
  return event.event_type.event_type === 'lists';
})
*/

my_lists.forEach((item) => {

  if (!item.created_at) {
    console.error('Timestamp is undefined or empty for item:', item);
    return // Salta l'elemento corrente se il timestamp è undefined o vuoto
  }

  const timestamp = item.created_at.toString();
  const dateManager = timeManager(timestamp)
  console.log('my date', dateManager.format('dd MMMM yyyy'))

  listsCard.addActivity(
    item.name,
    item.description,
    dateManager.format('dd MMMM yyyy'),//date.format('dd MMMM yyyy HH:mm:ss'),//TODO
    user_name
  )
})

export const lists_card = listsCard.getCardData()


const activityFeedCard = createUrlsCard('my-activity-feed-card')

activityFeedCard.updateCard({
  cardTitle: 'Activities Summary',
  action_url: '/last-insertions',
  cardIcon: 'activity',
})

/*
const addActivity = (
  action: ActionType,
  description: string | null,
  _url: string | null,
  username: string | null
)
export type ActionType = 
    'Created List' 
    | 'Updated List' 
    | 'Deleted List' 
    | 'Added link'
    | 'Updated link'
    | 'Deleted link'
    | undefined

export type ListType =
    'urls'
    | 'lists'
    | 'favourites'
    | 'suggestions'
    | 'activities'
    | undefined
console.log(urlsCard.getCardData());
console.log(listsCard.getCardData());
*/