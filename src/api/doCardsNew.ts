
import type { ListType, MyIconType } from '~/types'
import { CardManager} from '~/scripts/cardGenerator'
import type {ModifiedCardProps} from '~/scripts/cardGenerator'

const obj: ModifiedCardProps = {
    cardName: null,
    typeList: undefined,
    cardTitle: null,
    action_url: null,
    cardIcon: undefined,
    activities: []
}

const cardManager = CardManager.getInstance()

const initCard = (arg: string, obj: ModifiedCardProps): ModifiedCardProps => {
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

    return card
}

export const urlsCard = initCard('urls', { ...obj })


