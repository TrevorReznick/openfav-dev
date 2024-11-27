import type { IconType, ListType } from '~/types'
import { CardManager } from '~/scripts/cardGenerator'

import { Activity, Bot, Book, Bookmark, Clock, Folder, Link, List, Logs, FolderHeart, Star } from 'lucide-react'

export const iconMap: Record<string, IconType> = {
    activity: Activity,
    bot: Bot,
    book: Book,
    bookmark: Bookmark,
    clock: Clock,
    folder: Folder,
    link: Link,
    list: List,    
    logs: Logs,
    folderHeart: FolderHeart,
    star: Star
}


/*const ListTypes = {
    urls: 'urls',
    lists: 'lists',
    favourites: 'favourites',
    suggestions: 'suggestions',
    activities: 'activities'
} as const

export type ActionType = 
    'Created List' 
    | 'Updated List' 
    | 'Deleted List' 
    | 'Added link' 
    | 'Deleted link'
*/

const cardManager = CardManager.getInstance()

export const allActions = cardManager.createCard('allActions', {
    typeList: 'activities' as ListType,
    cardName: 'Users actions',
    cardIcon: iconMap.logs,
    action_url: '/activity'
}) 


// Aggiungi alcune attività di esempio
cardManager.addActivity('allActions', 'Created List', 'Folder', {
        description: 'Card creata da Mario Rossi'
    }
)

cardManager.addActivity('allActions', 'Updated List', 'Folder', {
        description: 'Card creata da Mario Rossi'
    }
)

cardManager.addActivity('allActions', 'Deleted List', 'Folder', {
    description: 'Card creata da Mario Rossi'
}
)



  
  
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


