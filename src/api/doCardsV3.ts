import type {ModifiedCardProps} from '~/scripts/cardGenerator'
import { CardGenerator } from '~/scripts/cardGenerator'
import type { ListType, MyIconType, ActionType, ActivityItem } from '~/types'


const cardGenerator = CardGenerator.getInstance()

export const createCardWithActivities = (type: ListType, name: string) => {

  const card = cardGenerator.createCard(name, { typeList: type, cardName: name })

  return {
    getCardData: () => cardGenerator.getCard(name),
    updateCardTitle: (title: string) => cardGenerator.updateCard(name, { cardTitle: title }),
    updateCard: (updates: Partial<ModifiedCardProps>) => cardGenerator.updateCard(name, updates),
    addActivity: (action: ActionType, actionIcon: MyIconType, details: { description: string, name: string }) => 
      cardGenerator.addActivity(name, action, actionIcon, {
        ...details,
        timestamp: new Date().toISOString()
      })
  }
}

export const initializeCards = () => {
  const urlsCard = createCardWithActivities('urls', 'my cardname')
  const listsCard = createCardWithActivities('lists', 'another cardname')

  // Initialize cards with default values
  urlsCard.updateCard({
    cardIcon: 'link',
    action_url: '/last-insertions'
  })

  listsCard.updateCard({
    cardTitle: 'My Lists',
    cardIcon: 'bookmark',
    action_url: '/my-lists'
  })

  return { urlsCard, listsCard }
}