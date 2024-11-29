
import type { ListType, MyIconType } from '~/types'
import { CardManager} from '~/scripts/cardGenerator'
import type {ModifiedCardProps} from '~/scripts/cardGenerator'

const obj: ModifiedCardProps = {
    cardName: null,
    typeList: undefined,
    cardTitle: null,
    action_url: null,
    cardIcon: 'folder',
    activities: []
}

const cardManager = CardManager.getInstance()

const initCard = (arg: string, cardobj: ModifiedCardProps): ModifiedCardProps => {
    switch (arg) {
        case 'urls':
            obj.cardName = arg
            obj.typeList = 'urls'
            obj.cardTitle = 'Last Insertions'
            obj.action_url = '/last-insertions'
            obj.cardIcon = 'bookmark'            
            break;
        default:
            // Gestisci altri casi o lanci un errore
            throw new Error(`Tipo di argomento non riconosciuto: ${arg}`);
    }

    const card = cardManager.createCard(obj.cardName, {
        typeList: obj.typeList,
        cardTitle: obj.cardTitle,
        cardIcon: obj.cardIcon,
        action_url: obj.action_url        
    })

    cardManager.addActivity(obj.cardName, 'Created List', 'folder', {
        description: 'Card creata da Mario Rossi',
        name: 'Enzo',
        timestamp: new Date().toISOString()
    }

    /*
    export interface ActivityItem {
        action: ActionType
        actionIcon: MyIconType        
        timestamp?: string | null
        description?: string | null
        name?: string | null
        url?: string | null
    }   

    const doAction = () => {
        let x = obj.activities
        x.timestamp

    }

    */
    
)

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


    return card
}

export const urlsCard = initCard('urls', { ...obj })


