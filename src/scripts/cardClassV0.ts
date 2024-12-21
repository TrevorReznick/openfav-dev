import type { ListType, MyIconType, ActionType, ActivityItem } from '~/types'
import { CardGenerator } from '~/scripts/cardGenerator'
import type { ModifiedCardProps } from '~/scripts/cardGenerator'

const cardGenerator = CardGenerator.getInstance()

type CardData = {
  cardName: string
  typeList: ListType
  cardTitle: string | null
  action_url: string | null
  cardIcon: MyIconType
  activities: ActivityItem[]
}

export const createCardClosure = (initialCardData: CardData) => {
  let cardData = { ...initialCardData }

  const addActivity = (
    action: ActionType,
    description: string | null,
    _url: string | null,
    username: string | null,
    additionalData?: Partial<Omit<ActivityItem, 'action' | 'actionIcon' | 'timestamp'>>
  ) => {
    let actionIcon: MyIconType
    let url: string | null = null

    switch (cardData.typeList) {
      case 'urls':
        actionIcon = 'link'
        url = _url
        break
      case 'lists':
        actionIcon = 'folder'
        break
      case 'activities':
        actionIcon = 'clock'
        break
      default:
        actionIcon = 'folder'
    }

    const activity: Partial<ActivityItem> = {
      action,
      description,
      actionIcon,
      url,
      name: username,
      ...additionalData
    }

    // Aggiungiamo il timestamp al momento dell'inserimento
    const activityWithTimestamp: ActivityItem = {
      ...activity,
      timestamp: new Date().toISOString()
    }

    cardData.activities.push(activityWithTimestamp)
    CardGenerator.getInstance().addActivity(cardData.cardName, action, actionIcon, additionalData)
    return activityWithTimestamp
  }

  return {
    getCardData: () => ({ ...cardData }),
    updateCardTitle: (title: string) => {
      cardData.cardTitle = title
      CardGenerator.getInstance().updateCard(cardData.cardName, { cardTitle: title })
    },
    updateCard: (updates: Partial<ModifiedCardProps>) => {
      Object.assign(cardData, updates)
      CardGenerator.getInstance().updateCard(cardData.cardName, updates)
    },
    addActivity,
  }
}