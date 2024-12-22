import { createUrlsCard, createListsCard, createActivityCard } from '~/scripts/cardClass'
//import * as api from '~/api/old/apiClientV1'
//import { events } from '~/api/old/doApis'
import * as api from '~/api/apiClient'
import { timeManager } from '~/scripts/third-parts/dateFormatter'


const get_events: any = await api.fetchElements('getEvents')
const get_lists: any = await api.fetchElements('getLists')

console.log('new api consumer', get_lists.data.data)
console.log('new api consumer', get_events.data.data)

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

/*
action,
description,
actionIcon,
url,
name: username,
timestamp
*/

urlsEvents.forEach((event) => {
  const timestamp = event.event_data
  const dateTimeManager = timeManager(timestamp)
  const formattedDate = dateTimeManager.format('dd MMMM yyyy')
  evUrlsCard.addActivity(
    event.event_type.event_description,
    null, 
    'https://www.example.com',
    null, // Usiamo la descrizione dell'evento come URL
    formattedDate
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
  const timestamp = event.event_data
  const dateTimeManager = timeManager(timestamp)
  const formattedDate = dateTimeManager.format('dd MMMM yyyy')
  evListsCard.addActivity(
    event.event_type.event_description,
    null,
    'https://www.example.com',
    'enzonav',
    formattedDate   
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
    item.description, // Usiamo il nome dell'elemento come azione
    null, // Usiamo il nome dell'elemento come URL
    null,
    null
  )
})

export const lists_card = listsCard.getCardData()

/* Create Summary Card */

const summaryCard = createListsCard('summary-card')

/*
action,
description,
actionIcon,
url,
name: username,
timestamp
*/

const now = new Date().toISOString();
const formattedDate = timeManager(now).format('dd MMMM yyyy')

summaryCard.updateCard({
  cardTitle: 'Activity Summary',
  action_url: '/activity-summary',
  cardIcon: 'activity',
})

let urlOperations = 0;
let listOperations = 0;
let favoriteOperations = 0;
let lastActivityTimestamp = ''

events.forEach((event) => {
  const timestamp = event.event_data
  const formattedDate = timeManager(timestamp).format('dd MMMM yyyy')

  if (event.event_type.event_type === 'urls') {
    urlOperations++
  } else if (event.event_type.event_type === 'lists') {
    listOperations++
  }

  if (!lastActivityTimestamp || new Date(timestamp) > new Date(lastActivityTimestamp)) {
    lastActivityTimestamp = formattedDate
  }
})

if (!lastActivityTimestamp) {
  lastActivityTimestamp = timeManager(new Date().toISOString()).format('dd MMMM yyyy')
}

summaryCard.updateCard({
  cardTitle: 'Activity Summary',
  action_url: '/activity-summary',
  cardIcon: 'activity',
});

summaryCard.addActivity(
  'Added link',
  `Total URL operations: ${urlOperations}`,
  null,
  'you',
  lastActivityTimestamp
)

summaryCard.addActivity(
  'Created List',
  `Total list operations: ${listOperations}`,
  null,
  'you',
  lastActivityTimestamp
);

summaryCard.addActivity(
  undefined,
  `Total favorite operations: ${favoriteOperations}`,
  null,
  'you',
  lastActivityTimestamp
);

summaryCard.addActivity(
  'Last activity',
  `Last activity on: ${lastActivityTimestamp}`,
  null,
  'you',
  lastActivityTimestamp
);

export const summary_card = summaryCard.getCardData()