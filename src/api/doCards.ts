import type { ListType } from '~/types'
import { CardGenerator } from '~/scripts/cardGenerator'

const doCard = CardGenerator.getInstance()

export const allActions = doCard.createCard('allActions', {
    typeList: 'activities' as ListType,
    cardTitle: 'Users test',
    cardIcon: 'activity',
    action_url: '/activity'
})

doCard.addActivity('allActions', 'Created List', 'folder', {
        description: 'Card creata da Mario Rossi'
    }
)

doCard.addActivity('allActions', 'Updated List', 'folder', {
        description: 'Card creata da Mario Rossi'
    }
)

doCard.addActivity('allActions', 'Deleted List', 'star', {
        description: 'Card creata da Mario Rossi'
    }
)

const test = doCard.getCard('allActions')

if(test) {
    console.log('card exists!')
    if(test.cardIcon) {
        console.log(test.cardIcon)
    } else {
        ('are you serious?')
    }
} else console.log('are you serious?')
  
export const cardLists = doCard.createCard('cardLists', {
    typeList: 'lists' as ListType,
    cardTitle: 'Card Activities',
    cardIcon: 'folderHeart',
    action_url: '/lists'
})
  
export const urlInsertions = doCard.createCard('urlInsertions', {
    typeList: 'urls' as ListType,
    cardTitle: 'Last Insertions',
    cardIcon: 'link',
    action_url: '/last-insertions'
})
  
export const allActivities = doCard.createCard('allActivities', {
    typeList: 'activities' as ListType,
    cardTitle: 'Personal Activity Feed',
    cardIcon: 'folder',
    action_url: '/personal-activity'
})


