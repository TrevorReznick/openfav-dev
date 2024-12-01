import type { ListType, MyIconType } from '~/types'
import { CardManager } from '~/scripts/cardGenerator'
import type { ModifiedCardProps } from '~/scripts/cardGenerator'

class Card {
    private cardManager: ReturnType<typeof CardManager.getInstance>
    private cardData: ModifiedCardProps
    

    constructor(name: string, type: ListType) {
        this.cardManager = CardManager
        this.cardManager.getInstance()
        this.cardData = {
            cardName: name,
            typeList: type,
            cardTitle: 'Last Insertions',
            action_url: '/last-insertions',
            cardIcon: 'bookmark' as MyIconType,
            activities: []
        }
        this.createCard()
    }

    private createCard() {
        this.cardManager.createCard(this.cardData.cardName, this.cardData)
    }

  addActivity(action: string, actionIcon: MyIconType, details: { description: string, name: string }) {
    this.cardManager.addActivity(
      this.cardData.cardName,
      action,
      actionIcon,
      {
        ...details,
        timestamp: new Date().toISOString()
      }
    )
  }

  getCardData(): ModifiedCardProps {
    return this.cardManager.getCard(this.cardData.cardName)
  }
}

export const initCard = (type: ListType, name: string): (() => ModifiedCardProps) => {
  const card = new Card(name, type)

  return () => {
    return card.getCardData()
  }
}