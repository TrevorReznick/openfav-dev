import type { ListType, MyIconType, ActionType } from '~/types'
import {initCard} from '~/scripts/cardClass'

export const doCard = initCard

const my_card = 'my cardname'

const urlsCardNew = initCard('urls', my_card)
const listsCardnew = initCard('lists', 'another cardname')




