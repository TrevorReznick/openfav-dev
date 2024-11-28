import type { ActionType, ActivityItem, CardProps} from '~/types'
import type {MyIconType} from '~/types'

export class Card {
    
    private config: CardProps

    constructor(config: Omit<CardProps, 'activities'>) {

        if (!config.cardIcon) {
            throw new Error('cardIcon è obbligatorio');
        } else console.log(config.cardIcon)

        this.config = {            
            ...config,
            activities: []
        }
    }

    addActivity(
        action: ActionType,
        actionIcon: MyIconType,
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