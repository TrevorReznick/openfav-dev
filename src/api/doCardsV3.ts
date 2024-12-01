import {initCard} from '~/scripts/cardClass'
import type {CardProps, ListType, ActionType, MyIconType, ActivityItem} from '~/types'
import { CardGenerator } from '~/scripts/cardGenerator'
import type { ModifiedCardProps } from '~/scripts/cardGenerator'



const doHeaderMainCard = (type: ListType, name: string) => {
    
    const card = initCard(type, name)

    return {

        getCardData: () => card().getCardData(),    
        updateCardTitle: (title: string) => card().updateCardTitle(title),
        updateCard: (updates: Partial<ModifiedCardProps>) => card().updateCard(updates),
        //updateCard: (updates) => card().updateCard(updates),    
        addActivity: (action: ActionType, actionIcon: MyIconType, details: Partial<ActivityItem>) => {
            card().addActivity(
                action,
                actionIcon,
                {
                    description: details.description || '',
                    name: details.name || '',
                    ...(details.timestamp && { timestamp: details.timestamp })
                }
            )
        }       
        
    }
}

export const initializeCards = () => {
    const urlsCard = doHeaderMainCard('urls', 'my cardname')
    const listsCard = doHeaderMainCard('lists', 'another cardname')
  
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




