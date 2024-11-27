// File: ~/utils/cardManager.ts

import type { CardProps, ListType, IconType, ActivityItem } from '~/types';
import * as LucideIcons from 'lucide-react';

// Update the CardProps interface to use string for cardIcon
interface ModifiedCardProps extends Omit<CardProps, 'cardIcon'> {
  cardIcon: keyof typeof LucideIcons;
}

export class CardManager {
  private static instance: CardManager;
  private cards: Map<string, ModifiedCardProps>;

  private constructor() {
    this.cards = new Map();
  }

  public static getInstance(): CardManager {
    if (!CardManager.instance) {
      CardManager.instance = new CardManager();
    }
    return CardManager.instance;
  }

  createCard(name: string, config: Omit<ModifiedCardProps, 'activities'>): ModifiedCardProps {
    const newCard: ModifiedCardProps = {
      ...config,
      activities: []
    };
    this.cards.set(name, newCard);
    return newCard;
  }

  addActivity(
    cardName: string,
    action: ActivityItem['action'],
    actionIcon: keyof typeof LucideIcons,
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
    return this.cards.get(name);
  }

  getAllCards(): Record<string, ModifiedCardProps> {
    return Object.fromEntries(this.cards);
  }
}

// Creazione delle istanze delle carte
const cardManager = CardManager.getInstance();

export const activityFeedCard = cardManager.createCard('activityFeed', {
  typeList: 'activities' as ListType,
  cardName: 'Activity Feed',
  cardIcon: 'Activity',
  action_url: '/activity'
});

export const cardListsCard = cardManager.createCard('cardLists', {
  typeList: 'lists' as ListType,
  cardName: 'Card Lists',
  cardIcon: 'List',
  action_url: '/lists'
});

export const lastInsertionsCard = cardManager.createCard('lastInsertions', {
  typeList: 'urls' as ListType,
  cardName: 'Last Insertions',
  cardIcon: 'Clock',
  action_url: '/last-insertions'
});

export const personalActivityFeedCard = cardManager.createCard('personalActivityFeed', {
  typeList: 'activities' as ListType,
  cardName: 'Personal Activity Feed',
  cardIcon: 'User',
  action_url: '/personal-activity'
});