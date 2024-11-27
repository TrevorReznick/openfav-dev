
import type { ListType } from '~/types'
import { CardManager } from '~/scripts/cardGenerator'

const cardManager = CardManager.getInstance()

export const allAction = cardManager.createCard('allActions', {
    typeList: 'activities' as ListType,
    cardName: 'Users actions',
    cardIcon: 'Logs',
    action_url: '/activity'
})
  
  
export const cardLists = cardManager.createCard('cardLists', {
    typeList: 'lists' as ListType,
    cardName: 'Card Activities',
    cardIcon: 'FolderHeart',
    action_url: '/lists'
})
  
export const urlInsertions = cardManager.createCard('urlInsertions', {
    typeList: 'urls' as ListType,
    cardName: 'Last Insertions',
    cardIcon: 'Link',
    action_url: '/last-insertions'
})
  
export const allActivities = cardManager.createCard('allActivities', {
    typeList: 'activities' as ListType,
    cardName: 'Personal Activity Feed',
    cardIcon: 'Folder',
    action_url: '/personal-activity'
})



/*
// Creazione delle istanze delle carte
const cardManager = CardManager.getInstance();

export const activityFeedCard = cardManager.createCard('activityFeed', {
  typeList: 'activities' as ListType,
  cardName: 'Activity Feed',
  cardIcon: 'Activity',
  action_url: '/activity'
});

export const cardListsCard = cardManager.createCard('cardLists', {
  typeList: 'lists' as ListType,
  cardName: 'Card Lists',
  cardIcon: 'List',
  action_url: '/lists'
});

export const lastInsertionsCard = cardManager.createCard('lastInsertions', {
  typeList: 'urls' as ListType,
  cardName: 'Last Insertions',
  cardIcon: 'Clock',
  action_url: '/last-insertions'
});

export const personalActivityFeedCard = cardManager.createCard('personalActivityFeed', {
  typeList: 'activities' as ListType,
  cardName: 'Personal Activity Feed',
  cardIcon: 'Star',
  action_url: '/personal-activity'
});
*/
