import type { ActionType, ActivityItem, CardProps} from '~/types/cards'
import type {IconType} from '~/types'

export class Card {
    private config: CardProps

    constructor(config: Omit<CardProps, 'activities'>) {
        this.config = {
            ...config,
            activities: []
        }
    }

    addActivity(
        action: ActionType,
        actionIcon: IconType,
        details?: Partial<Omit<ActivityItem, 'action' | 'actionIcon' | 'timestamp'>>
    ): void {
        this.config.activities.push({
            action,
            actionIcon,
            timestamp: new Date().toISOString(),
            ...details
        })
    }

    getDetails(): CardProps {
        return this.config
    }
}