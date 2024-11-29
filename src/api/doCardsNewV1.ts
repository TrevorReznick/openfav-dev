import type { ListType, MyIconType } from '~/types'
import { CardManager } from '~/scripts/cardGenerator'
import type { ModifiedCardProps } from '~/scripts/cardGenerator'

/*
export const obj: ModifiedCardProps = {
    cardName: null,
    typeList: undefined,
    cardTitle: null,
    action_url: null,
    cardIcon: 'folder',
    activities: []
}*/

const name = 'default'


class Card {

  private cardManager: CardManager
  private cardData: ModifiedCardProps

  constructor(name: string, type: ListType) {

    this.cardManager = CardManager.getInstance()

    this.cardData = {      
      typeList: type,
      cardTitle: null,
      action_url: null,
      cardIcon: 'folder' as MyIconType,
      activities: []
    }
    this.createCard()
  }

  private createCard() {
    this.cardManager.createCard(name, {
      cardName: name,
      typeList: this.cardData.typeList,
      cardTitle: this.cardData.cardTitle,
      cardIcon: this.cardData.cardIcon,
      action_url: this.cardData.action_url
    })
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

export const initCard = (type: ListType, name: string): (() => Card) => {

    const card = new Card(name, type)

    return () => {
        return card
    }
}

const urlsCard = initCard('urls', 'my cardname')
const listsCard = initCard('lists', 'another cardname')

// Add activities
urlsCard().addActivity('Created List', 'folder', {
  description: 'Card creata da Mario Rossi',
  name: 'Enzo'
})

listsCard().addActivity('Updated List', 'clock', {
  description: 'Lista aggiornata da Luigi Verdi',
  name: 'Maria'
})

// Get the card data
console.log(urlsCard().getCardData())
console.log(listsCard().getCardData())