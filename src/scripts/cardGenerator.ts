import type { CardProps, ActivityItem, MyIconType } from '~/types'

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
    return CardGenerator.instance;
  }

  createCard(name: string, config: Omit<ModifiedCardProps, 'activities'>): ModifiedCardProps {
    const newCard: ModifiedCardProps = {
      ...config,
      activities: []
    };
    this.cards.set(name, newCard)
    return newCard
  }

  addActivity(
    cardName: string,
    action: ActivityItem['action'],
    actionIcon: MyIconType,
    details?: Partial<Omit<ActivityItem, 'action' | 'actionIcon'>>
  ): void {
    const card = this.cards.get(cardName)
    if (!card) {
      throw new Error(`Card "${cardName}" not found`)
    }

    card.activities.push({
      action,
      actionIcon,
      ...details
    })
  }

  getCard(name: string): ModifiedCardProps | undefined {
    return this.cards.get(name)
  }

  getAllCards(): Record<string, ModifiedCardProps> {
    return Object.fromEntries(this.cards)
  }
}

