import type { ActionType, ActivityItem, CardProps, iconMap} from '~/types'

// Costanti per i tipi di lista
const ListTypes = {
    urls: 'urls',
    lists: 'lists',
    favourites: 'favourites',
    suggestions: 'suggestions',
    activities: 'activities'
} as const
  
  // Costanti per le azioni
const ActionTypes = {
    createdList: 'Created List',
    updatedList: 'Updated List',
    deletedList: 'Deleted List',
    addedLink: 'Added link',
    deletedLink: 'Deleted link'
} as const

function createActivity(
    action: ActionType,
    actionIcon: keyof typeof iconMap,
    details?: Partial<Omit<ActivityItem, 'action'>>
): ActivityItem {
    return {
        action,
        actionIcon,
        timestamp: null,
        name: null,
        description: null,
        url: null,
        ...details
    }
}

export const recentListsData: CardProps = {
    typeList: ListTypes.lists,
    cardName: 'Your Personal Lists',
    cardIcon: 'FolderHeart',    
    activities: [
        createActivity(ActionTypes.createdList, 'Folder', {
            description: 'You have created a new list',
            name: 'enzonax',
            actionIcon: 'Folder',
        }),
        createActivity(ActionTypes.deletedList, 'Folder', {
            description: 'You have deleted a list',
            name: 'enzonax',
            actionIcon: 'Folder',
        }),
        createActivity(ActionTypes.updatedList, 'Folder', {
            description: 'You have updated a list',
            name: 'enzonax',
            actionIcon: 'Folder',
        })
    ]
}

export const myActivityData: CardProps = {
    typeList: ListTypes.activities,
    cardName: 'Recent Activity',
    cardIcon: 'Activity',
    action_url: '/activities',
    activities: [
      createActivity(ActionTypes.createdList, 'Folder', {
        description: 'Today is a great day',        
        name: 'enzonax'
      }),
      createActivity(ActionTypes.addedLink, 'Link', {
        timestamp: '3 hours ago',
        name: 'enzonax',
        url: 'https://example.com'
      }),
      createActivity(ActionTypes.deletedList, 'Folder', {
        timestamp: '3 hours ago',        
        name: 'enzonax'
      }),
      createActivity(ActionTypes.deletedList, 'Bot', {
        timestamp: '3 hours ago',        
        name: 'enzonax'
      })
    ]
}

export const myLatActivityData: CardProps = {
    typeList: ListTypes.activities,
    cardName: 'Ny Great Last Activity',
    cardIcon: 'Logs',
    action_url: '/activities',
    activities: [
        createActivity(ActionTypes.createdList, 'Clock', {
            description: 'Today is a great day',
            name: 'double.faces',
            timestamp: '2 ore fa'
        }),
        createActivity(ActionTypes.addedLink, 'Clock', {
            timestamp: '3 hours ago',
            name: 'enzonax',        
            url: 'https://example.com'
        }),
        createActivity(ActionTypes.deletedList, 'Clock', {
            timestamp: '3 hours ago',
            name: 'double.faces',        
            description: 'Today is a great day'
        }),            
        createActivity(ActionTypes.deletedList, 'Clock', {
            timestamp: '3 hours ago',        
            name: 'enzonax',
            description: 'Today is a great day',
        })
    ]
};

export const urlListData: CardProps = {
    typeList: ListTypes.urls,
    cardName: 'Your Bookmarks',
    cardIcon: 'Bookmark',
    action_url: '/links',
    activities: [
        createActivity(ActionTypes.addedLink, 'Link', {
            name: 'enzonax',
            description: 'Useful documentation',            
            url: 'https://docs.example.com'
        }),
        createActivity(ActionTypes.addedLink, 'Link', {
            name: 'enzonax',
            description: 'Useful documentation',            
            url: 'https://docs.example.com'
        }),
        createActivity(ActionTypes.addedLink, 'Link', {
            name: 'enzonax',
            description: 'Useful documentation',            
            url: 'https://docs.example.com'
        })

    ],
    
}

  

