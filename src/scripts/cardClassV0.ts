import type { ListType, MyIconType, ActionType, ActivityItem } from '~/types'
import { CardGenerator } from '~/scripts/cardGenerator'
import type { ModifiedCardProps } from '~/scripts/cardGenerator'

export interface AddMethodToType extends Omit<ModifiedCardProps, 'cardName'> {    
    addActivity?: () => ActivityItem; //
  }
class Card {

    private doCard: CardGenerator
    private cardData: AddMethodToType



    constructor(cardName: string, type: ListType) {

        this.doCard = CardGenerator.getInstance()

        this.cardData = {  
            cardName: cardName,    
            typeList: type,
            cardTitle: null,
            action_url: null,
            cardIcon: 'folder' as MyIconType,
            activities: [],
            addActivity: () => this.myClosure1
        }

        

        this.createCard()

        this.configureCard(type, cardName)
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

    private configureCard(type: ListType, name: string) {
        switch (type) {
            case 'urls':
                /*this.cardData.cardTitle = 'Last Insertions';
                this.cardData.action_url = '/last-insertions';
                this.cardData.cardIcon = 'bookmark';
                */        
                this.cardData.action_url = '/last-insertions'
                this.cardData.cardIcon = 'link'            
                break
            case 'lists':
                this.cardData.cardName = name
                this.cardData.typeList = type
                this.cardData.cardTitle = 'My Lists'
                this.cardData.action_url = '/my-lists'
                this.cardData.cardIcon = 'bookmark'            
                break
            default:
                // Gestisci altri casi o lanci un errore
                throw new Error(`Tipo di argomento non riconosciuto`)
        }
        this.cardData.addActivity = this.myClosure(name)
    /*
    aggiunge un nuovo oggetto activity all'array activities all'interno dell'oggetto cardData
    */

    
    /*
    const listsCard = createCardWithActivities('lists', 'another cardname')
    urlsCard.updateCard({
        cardIcon: 'link',
        action_url: 'https://stinkyfeet.com'
    })
    urlsCard.addActivity('Created List', 'folder', {
        description: 'Card creata da Vincenzo Navarra',
        name: 'Enzo'
    })
    const createCardWithActivities = (type, name) => {
        const card = initCard(type, name)
        return {
            getCardData: () => card().getCardData(),
            updateCardTitle: (title) => card().updateCardTitle(title),
            updateCard: (updates) => card().updateCard(updates),
            addActivity: (action, actionIcon, details) => card().addActivity(action, actionIcon, details)
        }
    }
    */

  }

    private myClosure(name: string) {

        return (description: string | null, actionIcon: MyIconType | 'folder' , timestamp: string | null) => {

            let activity: ActivityItem = {
                name: name,
                description: description,
                actionIcon: actionIcon,
                timestamp: timestamp
            }

            this.cardData.activities.push(activity)
        }
    }

    private myClosure1(action: ActionType, type: ListType, description: string| null, _url: string | null) {        
        
        return () => {

            let actionIcon
            let url            

            switch (type) {
                case 'urls':                    
                    actionIcon = 'link'
                    url = _url
                    break
                case 'lists':
                    action = action
                    description = description
                    actionIcon = 'folder'
                    break                
            }
    
            const activity: ActionType = {
                action,
                description,
                actionIcon,
                url
            }
    
            this.cardData.activities.push(activity)
            return activity
        }
    }
}
    
    // Esempio di utiliz

    

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