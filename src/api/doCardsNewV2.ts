import type { ListType, MyIconType } from '~/types'
import { CardManager } from '~/scripts/cardGenerator'
import type { ModifiedCardProps } from '~/scripts/cardGenerator'

const cardManager = CardManager.getInstance()

type CardType = 'urls' | 'lists'

const cardDefaults: Record<CardType, Partial<ModifiedCardProps>> = {
    urls: {
        cardTitle: 'Last Insertions',
        action_url: '/last-insertions',
        cardIcon: 'bookmark' as MyIconType
    },
    lists: {
        cardTitle: 'Last Insertions',
        action_url: '/last-insertions',
        cardIcon: 'bookmark' as MyIconType
    }
}

export const initCard = (type: CardType, name: string, customProps: Partial<ModifiedCardProps> = {}): ModifiedCardProps => {
    if (!(type in cardDefaults)) {
        throw new Error(`Tipo di argomento non riconosciuto: ${type}`)
    }

    const cardProps: ModifiedCardProps = {
        action,
      actionIcon,
        cardName: name,
        typeList: type,
        activities: [],
        ...cardDefaults[type],
        ...customProps
    }

    const card = cardManager.createCard(name, cardProps)

    return card
}

export const addCardActivity = (
    cardName: string, 
    action: string, 
    actionIcon: MyIconType, 
    details: { description: string, name: string }
    ) => {
    cardManager.addActivity(
        cardName,
        action,
        actionIcon,
        {
        ...details,
        timestamp: new Date().toISOString()
        }
    )
    }