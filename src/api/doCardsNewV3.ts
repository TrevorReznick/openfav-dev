
import type { ListType, MyIconType } from '~/types'
import { CardManager} from '~/scripts/cardGenerator'
import type {ModifiedCardProps} from '~/scripts/cardGenerator'

export const obj: ModifiedCardProps = {
    typeList: undefined,
    cardTitle: null,
    action_url: null,
    cardIcon: 'folder',
    activities: []
}

const cardManager = CardManager.getInstance()

class Card {

    private cardManager: CardManager
    private cardData: ModifiedCardProps
  
    constructor(name: string, type: ListType) {      
        this.cardManager = CardManager.getInstance()
    }
    
}

export const initCard = (type: ListType, name: string): ModifiedCardProps => {

    switch (type) {
        case 'urls':
            obj.cardName = name
            obj.typeList = type
            obj.cardTitle = 'Last Insertions'
            obj.action_url = '/last-insertions'
            obj.cardIcon = 'bookmark'            
            break
        case 'lists':
                obj.cardName = name
                obj.typeList = type
                obj.cardTitle = 'My Lists'
                obj.action_url = '/my-lists'
                obj.cardIcon = 'bookmark'            
                break
        default:
            // Gestisci altri casi o lanci un errore
            throw new Error(`Tipo di argomento non riconosciuto: ${arg}`);
    }

    const card = cardManager.createCard(obj.cardName, {
        cardName: obj.cardName,
        typeList: obj.typeList,
        cardTitle: obj.cardTitle,
        cardIcon: obj.cardIcon,
        action_url: obj.action_url        
    })

    cardManager.addActivity(
        obj.cardName, 
        'Created List', 
        'folder', {
            description: 'Card creata da Mario Rossi',
            name: 'Enzo',
            timestamp: new Date().toISOString()
        }
    )

    return card
    
    /*
    /*
    export interface ActivityItem {
        action: ActionType
        actionIcon: MyIconType        
        timestamp?: string | null
        description?: string | null
        name?: string | null
        url?: string | null
    } 
    const doActions = () => {
        switch (obj.typeList) {
            default:
                let a = 1
                break
        }
    }

    const getActionCard = (typeList, actionType, ) => {
        switch (typeList) {
            case 'urls':
                
                break
        }
    }
    */
}

export const urlsCard = initCard('urls', 'my cardname', { ...obj })


