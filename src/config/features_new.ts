
//import type { Activity, Bot, Book, Bookmark, Clock, Folder, Link, List, Logs, FolderHeart, Star } from 'lucide-react'
//export type IconType = typeof Activity | typeof Bot | typeof Book | typeof Bookmark | typeof Clock | typeof Folder | typeof Link | typeof List | typeof Logs | typeof FolderHeart | typeof Star
import type {IconType} from '~/types'
import type { ListType } from '~/types/cards'
import { CardManager } from '~/scripts/cardManager'

const cardManager = CardManager.getInstance()

export const activityFeedCard = cardManager.createCard('activityFeed', {
    typeList: 'activities' as ListType,
    cardName: 'Activity Feed',
    cardIcon: 'Logs',
    action_url: '/activity'
})
  
  
export const cardListsCard = cardManager.createCard('cardLists', {
    typeList: 'lists' as ListType,
    cardName: 'Card Lists',
    cardIcon: 'Link',
    action_url: '/lists'
})
  
export const lastInsertionsCard = cardManager.createCard('lastInsertions', {
    typeList: 'urls' as ListType,
    cardName: 'Last Insertions',
    cardIcon: 'Folder',
    action_url: '/last-insertions'
})
  
  export const personalActivityFeedCard = cardManager.createCard('personalActivityFeed', {
    typeList: 'activities' as ListType,
    cardName: 'Personal Activity Feed',
    cardIcon: 'Folder',
    action_url: '/personal-activity'
})
