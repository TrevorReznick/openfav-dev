import { createUrlsCard, createListsCard } from "~/scripts/cardClass"

import {events} from '~/api/old/doApis'

console.log("Featured Events:", events)


/* get @@ remote data @@ */
const my_events: any = events

const urlsCard = createUrlsCard("my-url-card")

urlsCard.updateCard({
  cardTitle: "Last Insertions",
  action_url: "/last-insertions",
  cardIcon: "link",
})

const urlsEvents = my_events.filter((event) => {
  return event.event_type.event_type === "urls"
})

urlsEvents.forEach((event) => {
  urlsCard.addActivity(
    event.event_type.event_description,
    "action",
    "action 1",
    "enzonav"
  )
})

export const my_test_card = urlsCard.getCardData();

const listsCard = createListsCard("my-list-card")

listsCard.updateCard({
  cardTitle: "Personal Lists",
  action_url: "/todo-lists",
  cardIcon: "folderHeart",
})

const listsEvents = my_events.filter((event) => {
  return event.event_type.event_type === "lists";
})

listsEvents.forEach((event) => {
  listsCard.addActivity(
    event.event_type.event_description,
    "action",
    "action 1",
    "enzonav"
  );
})

export const my_test_card1 = listsCard.getCardData()

/*
console.log(urlsCard.getCardData());
console.log(listsCard.getCardData());
*/