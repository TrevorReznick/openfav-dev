import type { ListType, MyIconType, ActionType } from "~/types";
import { createUrlsCard, createListsCard } from "~/scripts/cardClassV1";
import { getEvents } from "~/scripts/requests";

/* get @@ remote data @@ */

const my_events: any = await getEvents();

console.log("db", my_events);

const urlsCard = createUrlsCard("my-url-card");

urlsCard.updateCard({
  cardTitle: "Last insertions",
  action_url: "/last-insertions",
  cardIcon: "link",
});

/*
urlsCard.addActivity(
  "Added link",
  "Added a new favorite URL",
  "https://example.com"
);
*/

const urlsEvents = my_events.filter((event) => {
  return event.event_type.event_type === "urls";
});

urlsEvents.forEach((event) => {
  urlsCard.addActivity(
    event.event_type.event_description,
    "action",
    "action 1",
    "enzonav"
  );
});

() => urlsEvents;

console.log("i am right? ", urlsCard.getCardData());

export const my_test_card = urlsCard.getCardData();

const listsCard = createListsCard("My Lists Card");

listsCard.updateCard({
  cardTitle: "Todo Lists",
  action_url: "/todo-lists",
  cardIcon: "link",
});

listsCard.addActivity("Created List", "Created a new todo list", null);

console.log(urlsCard.getCardData());
console.log(listsCard.getCardData());
