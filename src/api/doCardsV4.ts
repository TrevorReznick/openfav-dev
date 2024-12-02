import { initCard } from "~/scripts/cardClass";
import type { ListType, MyIconType, ActionType, ActivityItem } from "~/types";
import { getEvents } from "~/scripts/requests";

// type: 'urls' | 'lists', name: string
const createCardWithActivities = (type, name) => {
  const card = initCard(type, name);
  return {
    getCardData: () => card().getCardData(),
    updateCardTitle: (title) => card().updateCardTitle(title),
    updateCard: (updates) => card().updateCard(updates),
    addActivity: (action, actionIcon, details) =>
      card().addActivity(action, actionIcon, details),
  };
};

/* get @@ remote data @@ */

const my_events: any = await getEvents();
console.log("good night", my_events);

/* @@ Creazione delle card @@ */

const urlsCard = createCardWithActivities("urls", "my cardname");

urlsCard.updateCardTitle("Last Insertions");

urlsCard.updateCard({
  cardIcon: "link",
  action_url: "https://example.com",
});
//urlsCard.addActivity('Added link', 'Added a new favorite URL', 'https://example.com')
const urlsEvents = my_events.filter((event) => {
  event.event_type.event_type === "urls";
  urlsCard.addActivity(
    event.event_type.event_description,
    "Added a new favorite URL",
    "https://example.com"
  );
});

() => urlsEvents;

console.log("i am right? ", urlsCard.getCardData());

const listsCard = createCardWithActivities("lists", "another cardname");

// Aggiornamento e aggiunta di attività alle card
urlsCard.updateCardTitle("Nuovo Titolo");

urlsCard.updateCard({
  cardIcon: "link",
  action_url: "https://example.com",
});
urlsCard.addActivity("Created List", "folder", {
  description: "Card creata da Vincenzo Navarra",
  name: "Enzo",
});
urlsCard.addActivity("Created List", "clock", {
  description: "Card creata da Luigi Frisco",
  name: "Enzo",
});
listsCard.updateCardTitle("Nuovo Titolo 1");

listsCard.addActivity("Updated List", "clock", {
  description: "Lista aggiornata da Dino di Piazza",
  name: "Maria",
});
listsCard.addActivity("Updated List", "link", {
  description: "Lista aggiornata da Dino di Piazza",
  name: "Enzo",
});
listsCard.updateCard({
  cardIcon: "folderHeart",
  action_url: "https://example.com",
});

// Oggetto featuredCard contenente i dati delle card
// Struttura: { urlsCard: CardData, listsCard: CardData }
export const featuredCards = {
  urlsCard: urlsCard.getCardData(),
  listsCard: listsCard.getCardData(),
};

// Uso:
// import { featuredCard } from './scripts/myCards'
// const urlsCardData = featuredCard.urlsCard
// const listsCardData = featuredCard.listsCard
