import { createUrlsCard, createListsCard } from "~/scripts/cardClass"
import * as api from '~/api/apiClient'
import {events} from '~/api/old/doApis'


console.log("Featured Events:", events)
console.log("Featured Lists:", api.lists.data)

/* get @@ remote data @@ */

//const my_events: any = events
const my_events: any = events.slice(0, 5)
const my_lists: any = api.lists.data

const evUrlsCard = createUrlsCard("my-url-card")

evUrlsCard.updateCard({
  cardTitle: "Last Insertions",
  action_url: "/last-insertions",
  cardIcon: "link",
})

const urlsEvents = my_events.filter((event) => {
  return event.event_type.event_type === "urls"
})

urlsEvents.forEach((event) => {
  evUrlsCard.addActivity(
    event.event_type.event_description,
    "action",
    "action 1",
    "enzonav"
  )
})

export const ev_urls_card = evUrlsCard.getCardData()

const evListsCard = createListsCard("my-list-card")

evListsCard.updateCard({
  cardTitle: "Personal Lists",
  action_url: "/todo-lists",
  cardIcon: "folderHeart",
})

const listsEvents = events.filter((event) => {
  return event.event_type.event_type === "lists";
})

listsEvents.forEach((event) => {
  evListsCard.addActivity(
    event.event_type.event_description,
    "action",
    "action 1",
    "enzonav"
  );
})

export const ev_lists_card = evListsCard.getCardData()

/* @@ new lists card @@ */


/*
console.log(urlsCard.getCardData());
console.log(listsCard.getCardData());
*/