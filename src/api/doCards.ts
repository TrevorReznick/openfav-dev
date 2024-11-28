import type { MyIconType, ListType } from '~/types'
import { CardManager } from '~/scripts/cardGenerator'

import { Activity, Bot, Book, Bookmark, Clock, Folder, Link, List, Logs, FolderHeart, Star } from 'lucide-react'

import type { LucideProps } from 'lucide-react';

export const iconMap: Record<MyIconType, React.FC<LucideProps>> = {
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

const name: MyIconType = 'folder'

/*
function renderIcon(iconName: MyIconType, props?: LucideProps) {
    const IconComponent = iconMap[iconName];
    return <IconComponent {...props} />
}


export const iconMap: Record<MyIconType, 
    typeof Activity 
    | typeof Bot|  typeof Book 
    | typeof Bookmark| typeof Clock 
    | typeof Folder 
    | typeof Link 
    | typeof List 
    | typeof Logs 
    | typeof FolderHeart 
    | typeof Star
> = {
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
*/

/*
function renderIcon(iconName: string, props?: any) {
    const IconComponent = iconMap[iconName]
    if (!IconComponent) return null;
    return <IconComponent {...props} />;
}
*/

const cardManager = CardManager.getInstance()

export const allActions = cardManager.createCard('allActions', {
    typeList: 'activities' as ListType,
    cardName: 'Users actions',
    cardIcon: 'folder',
    action_url: '/activity'
}) 


// Aggiungi alcune attività di esempio
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
  
export const cardLists = cardManager.createCard('cardLists', {
    typeList: 'lists' as ListType,
    cardName: 'Card Activities',
    cardIcon: 'folderHeart',
    action_url: '/lists'
})
  
export const urlInsertions = cardManager.createCard('urlInsertions', {
    typeList: 'urls' as ListType,
    cardName: 'Last Insertions',
    cardIcon: 'link',
    action_url: '/last-insertions'
})
  
export const allActivities = cardManager.createCard('allActivities', {
    typeList: 'activities' as ListType,
    cardName: 'Personal Activity Feed',
    cardIcon: 'folder',
    action_url: '/personal-activity'
})

const myCard = 

console.log()


