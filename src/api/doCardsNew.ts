
import type { ListType, MyIconType } from '~/types'
import { CardManager } from '~/scripts/cardGenerator';

let myUrlInsertionsCardName = null
let typeList: ListType = undefined
let cardName = null
let url_action = null
let  icon_card = undefined

let obj: {
    myUrlInsertionsCardName: string | null
    typeList: ListType | undefined
    cardName: string | null
    url_action: string | null
    icon_card: MyIconType | undefined
} = {
    myUrlInsertionsCardName: null,
    typeList: undefined,
    cardName: null,
    url_action: null,
    icon_card: undefined
}

const cardManager = CardManager.getInstance()


const initCard (arg: string, obj: any) => {
    switch (arg) {
        case 'urls':
            obj.myUrlInsertionsCardName = 'urlInsertions'
            obj.typeList = 'urls'
            obj.cardName = 'Last Insertions'
            obj.url_action = '/last-insertions'
            obj.icon_card=  'bookmark'
            break
    }
    const Card = cardManager.createCard(obj.myUrlInsertionsCardName, {
        typeList: obj.typeList as ListType,
        cardName: obj.cardName,
        cardIcon: obj.icon_card, // Icona di bookmark
        action_url: obj.url_action
    })
    return Card
}


const getCardIcon= (typeList) => {
    switch (typeList) {
        default:
            let a = 1
            break
    }

}

const getActionCard = (typeList, obj) => {
    switch (typeList) {
       case 'urls':
            let a = 1
            break
    }
}
/*

// Aggiunta delle azioni specifiche per i Last Insertions


// Funzione per renderizzare le card basata sul tipo di lista
function renderCard(card: any) {
    switch (card.typeList) {
        case 'urls':
            return renderUrlsCard(card);
        default:
            return renderDefaultCard(card);
    }
}
*/

