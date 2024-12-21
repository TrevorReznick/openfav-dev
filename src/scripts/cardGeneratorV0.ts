import type { CardProps, ActivityItem, MyIconType, ListType } from '~/types'

export interface ModifiedCardProps extends Omit<CardProps, 'cardIcon'> {
    cardIcon: MyIconType
  }

export class CardGenerator {

    private static instance: CardGenerator
    private cards: Map<string, ModifiedCardProps>

    private constructor() {
        this.cards = new Map()
    }

    public static getInstance(): CardGenerator {
        if (!CardGenerator.instance) {
        CardGenerator.instance = new CardGenerator()
        }
        return CardGenerator.instance
    }

    public updateCard(cardName: string, updates: Partial<ModifiedCardProps>): void {
        const card = this.cards.get(cardName)
        if (card) {
        Object.assign(card, updates)
        }
    }

    public createCard(name: string, config: Omit<ModifiedCardProps, 'activities'>): ModifiedCardProps {
        const newCard: ModifiedCardProps = {
            ...config,
            activities: []
        }
        this.cards.set(name, newCard)
        return newCard
    }

    public addActivity(
        cardName: string,
        action: ActivityItem['action'],
        actionIcon: MyIconType,
        details?: Partial<Omit<ActivityItem, 'action' | 'actionIcon' | 'timestamp'>>
    ): void {
        const card = this.cards.get(cardName)
        if (!card) {
            throw new Error(`Card "${cardName}" not found`)
        }

        const activity: ActivityItem = {
            action,
            actionIcon,
            timestamp: new Date().toISOString(),
            ...details
        }

        card.activities.push(activity)
    }

    public getCard(name: string): ModifiedCardProps | undefined {
        return this.cards.get(name)
    }

    public getAllCards(): Record<string, ModifiedCardProps> {
        return Object.fromEntries(this.cards)
    }
}