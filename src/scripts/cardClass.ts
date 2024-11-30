import type { ListType, MyIconType, ActionType } from '~/types'
import { CardGenerator } from '~/scripts/cardGenerator'
import type { ModifiedCardProps } from '~/scripts/cardGenerator'

class Card {

  private doCard: CardGenerator
  private cardData: ModifiedCardProps

  constructor(cardName: string, type: ListType) {

    this.doCard = CardGenerator.getInstance()

    this.cardData = {  
      cardName: cardName,    
      typeList: type,
      cardTitle: null,
      action_url: null,
      cardIcon: 'folder' as MyIconType,
      activities: []
    }
    this.createCard()
  }

  private createCard() {
    this.doCard.createCard(this.cardData.cardName, {

      cardName: this.cardData.cardName,
      typeList: this.cardData.typeList,
      cardTitle: this.cardData.cardTitle,
      cardIcon: this.cardData.cardIcon,
      action_url: this.cardData.action_url

    })
  }

  addActivity(action: ActionType, actionIcon: MyIconType, details: { description: string, name: string }) {
    this.doCard.addActivity(
        this.cardData.cardName,
        action,
        actionIcon,
        {
            ...details,
            timestamp: new Date().toISOString()
        }
    )
  }

  updateCard(updates: Partial<ModifiedCardProps>) {
    Object.assign(this.cardData, updates)
    this.doCard.updateCard(this.cardData.cardName, updates)
  }

  updateCardTitle(newTitle: string | null) {
    if (newTitle !== null) {
      this.cardData.cardTitle = newTitle
      this.doCard.updateCard(this.cardData.cardName, { cardTitle: newTitle })
    }
  }

  getCardData(): ModifiedCardProps | undefined {
      return this.doCard.getCard(this.cardData.cardName)
    }
}


export const initCard = (type: ListType, name: string): (() => Card) => {

    const card = new Card(name, type)

    return () => {
        return card
    }
}

/*
const urlsCard = initCardTest('urls', 'my cardname')
const listsCard = initCardTest('lists', 'another cardname')

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
*/