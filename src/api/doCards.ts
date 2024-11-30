import type { ListType } from '~/types'
import { CardManager } from '~/scripts/cardGenerator'

const cardManager = CardManager.getInstance()

export const allActions = cardManager.createCard('allActions', {
    typeList: 'activities' as ListType,
    cardTitle: 'Users test',
    cardIcon: 'activity',
    action_url: '/activity'
})

cardManager.addActivity('allActions', 'Created List', 'folder', {
        description: 'Card creata da Mario Rossi'
    }
)

cardManager.addActivity('allActions', 'Updated List', 'folder', {
        description: 'Card creata da Mario Rossi'
    }
)

cardManager.addActivity('allActions', 'Deleted List', 'star', {
        description: 'Card creata da Mario Rossi'
    }
)

const test = cardManager.getCard('allActions')

if(test) {
    console.log('card exists!')
    if(test.cardIcon) {
        console.log(test.cardIcon)
    } else {
        ('are you serious?')
    }
} else console.log('are you serious?')
  
export const cardLists = cardManager.createCard('cardLists', {
    typeList: 'lists' as ListType,
    cardTitle: 'Card Activities',
    cardIcon: 'folderHeart',
    action_url: '/lists'
})
  
export const urlInsertions = cardManager.createCard('urlInsertions', {
    typeList: 'urls' as ListType,
    cardTitle: 'Last Insertions',
    cardIcon: 'link',
    action_url: '/last-insertions'
})
  
export const allActivities = cardManager.createCard('allActivities', {
    typeList: 'activities' as ListType,
    cardTitle: 'Personal Activity Feed',
    cardIcon: 'folder',
    action_url: '/personal-activity'
})


