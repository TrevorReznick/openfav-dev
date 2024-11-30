import {initCard} from '~/scripts/cardClass'



// Funzione di utilità per creare una card e aggiungere attività
// type: 'urls' | 'lists', name: string
const createCardWithActivities = (type, name) => {
  const card = initCard(type, name)
  return {
    getCardData: () => card().getCardData(),
    // title: string
    updateCardTitle: (title) => card().updateCardTitle(title),
    // updates: { cardIcon?: string, action_url?: string }
    updateCard: (updates) => card().updateCard(updates),
    // action: string, actionIcon: string, details: { description: string, name: string }
    addActivity: (action, actionIcon, details) => 
      card().addActivity(action, actionIcon, details)
  }
}

// Creazione delle card
const urlsCard = createCardWithActivities('urls', 'my cardname')
const listsCard = createCardWithActivities('lists', 'another cardname')

// Aggiornamento e aggiunta di attività alle card
urlsCard.updateCardTitle('Nuovo Titolo')
urlsCard.updateCard({
  cardIcon: 'link',
  action_url: 'https://example.com'
})
urlsCard.addActivity('Created List', 'folder', {
  description: 'Card creata da Vincenzo Navarra',
  name: 'Enzo'
})
urlsCard.addActivity('Created List', 'clock', {
  description: 'Card creata da Luigi Frisco',
  name: 'Enzo'
})

listsCard.addActivity('Updated List', 'clock', {
  description: 'Lista aggiornata da Dino di Piazza',
  name: 'Maria'
})

// Oggetto featuredCard contenente i dati delle card
// Struttura: { urlsCard: CardData, listsCard: CardData }
export const featuredCards = {
  urlsCard: urlsCard.getCardData(),
  listsCard: listsCard.getCardData()
}

// Uso:
// import { featuredCard } from './scripts/myCards'
// const urlsCardData = featuredCard.urlsCard
// const listsCardData = featuredCard.listsCard

