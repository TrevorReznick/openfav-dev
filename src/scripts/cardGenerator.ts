// File: ~/utils/cardManager.ts

import type { CardProps, ListType, ActivityItem } from '~/types';
import { iconMap } from '~/types'

// Update the CardProps interface to use string for cardIcon
interface ModifiedCardProps extends Omit<CardProps, 'cardIcon'> {
  cardIcon: keyof typeof iconMap
}

export class CardManager {
  private static instance: CardManager;
  private cards: Map<string, ModifiedCardProps>;

  private constructor() {
    this.cards = new Map()
  }

  public static getInstance(): CardManager {
    if (!CardManager.instance) {
      CardManager.instance = new CardManager()
    }
    return CardManager.instance;
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
    actionIcon: keyof typeof iconMap,
    details?: Partial<Omit<ActivityItem, 'action' | 'actionIcon' | 'timestamp'>>
  ): void {
    const card = this.cards.get(cardName);
    if (!card) {
      throw new Error(`Card "${cardName}" not found`);
    }

    card.activities.push({
      action,
      actionIcon,
      timestamp: new Date().toISOString(),
      ...details
    });
  }

  getCard(name: string): ModifiedCardProps | undefined {
    return this.cards.get(name)
  }

  getAllCards(): Record<string, ModifiedCardProps> {
    return Object.fromEntries(this.cards)
  }
}

