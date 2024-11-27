import type {IconType} from '~/types'

export const ListTypes = {
    urls: 'urls',
    lists: 'lists',
    favourites: 'favourites',
    suggestions: 'suggestions',
    activities: 'activities'
} as const

export type ListType = typeof ListTypes[keyof typeof ListTypes];

export const ActionTypes = {
    createdList: 'Created List',
    updatedList: 'Updated List',
    deletedList: 'Deleted List',
    addedLink: 'Added link',
    deletedLink: 'Deleted link'
} as const

export type ActionType = typeof ActionTypes[keyof typeof ActionTypes]

export interface ActivityItem {
    action: ActionType;
    actionIcon: IconType
    timestamp: string
    name?: string
    description?: string
    url?: string
}

export interface CardProps {
    typeList: ListType
    cardName: string
    cardIcon: IconType
    action_url: string
    activities: ActivityItem[];
}
