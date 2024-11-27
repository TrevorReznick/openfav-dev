import type { ActionType, ListType, ActivityItem, CardProps, iconMap } from '~/types';

const ListTypes = {
    urls: 'urls',
    lists: 'lists',
    favourites: 'favourites',
    suggestions: 'suggestions',
    activities: 'activities'
} as const;

const ActionTypes = {
    createdList: 'Created List',
    updatedList: 'Updated List',
    deletedList: 'Deleted List',
    addedLink: 'Added link',
    deletedLink: 'Deleted link'
} as const;

class CardManager {
    private static instance: CardManager;

    private cards: Map<string, CardProps>;

    private constructor() {
        this.cards = new Map();
    }

    // Singleton pattern per avere una singola istanza del manager
    public static getInstance(): CardManager {
        if (!CardManager.instance) {
            CardManager.instance = new CardManager();
        }
        return CardManager.instance;
    }

    createCard(name: string, config: Omit<CardProps, 'activities'>): void {
        this.cards.set(name, {
            ...config,
            activities: []
        });
    }

    addActivity(
        cardName: string,
        typeList: ListType,
        action: typeof ActionTypes[keyof typeof ActionTypes],
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

    getCard(name: string): CardProps | undefined {
        return this.cards.get(name);
    }

    getAllCards(): Record<string, CardProps> {
        return Object.fromEntries(this.cards);
    }
}

export const ExampleUsage = () => {
    // Ottieni l'istanza del CardManager
    const cardManager = CardManager.getInstance()

    // Crea una nuova card
    cardManager.createCard('myFavorites', {
        typeList: ListTypes.favourites,
        cardName: 'I Miei Preferiti',
        cardIcon: 'Star',
        action_url: '/favorites'
    });

    // Aggiungi alcune attività
    cardManager.addActivity('myFavorites', 
        ListTypes.favourites,
        ActionTypes.addedLink,
        'Star',
        {
            name: 'enzonax',
            description: 'Link interessante',
            url: 'https://example.com'
        }
    );

    //console.log(cardManager.getAllCards());
};