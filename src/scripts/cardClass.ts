import type { ListType, MyIconType, ActionType, ActivityItem } from '~/types';
import { CardGenerator } from '~/scripts/cardGenerator';
import type { ModifiedCardProps } from '~/scripts/cardGenerator';

const cardGenerator = CardGenerator.getInstance()

type CardData = {
  cardName: string;
  typeList: ListType;
  cardTitle: string | null;
  action_url: string | null;
  cardIcon: MyIconType;
  activities: ActivityItem[];
};

const createCardClosure = (initialCardData: CardData) => {
  let cardData = { ...initialCardData }

  const addActivity = (
    action: ActionType,
    description: string | null,
    _url: string | null,
    username: string | null
  ) => {
    let actionIcon: MyIconType
    let url: string | null = null

    switch (cardData.typeList) {
      case 'urls':
        actionIcon = 'link'
        url = _url
        break
      case 'activities':
          actionIcon = 'activity'
          url = _url
          break
      case 'lists':
        actionIcon = 'folder'
        break
      default:
        actionIcon = 'folder'
    }

    const activity: ActivityItem = {
      action,
      description,
      actionIcon,
      url,
      name: username, // Assuming we want to use cardName as the activity name
      timestamp: new Date().toISOString(),
    };

    cardData.activities.push(activity)
    return activity
  };

  return {
    getCardData: () => ({ ...cardData }),
    updateCardTitle: (title: string) => {
      cardData.cardTitle = title;
      cardGenerator.updateCard(cardData.cardName, { cardTitle: title });
    },
    updateCard: (updates: Partial<ModifiedCardProps>) => {
      Object.assign(cardData, updates);
      cardGenerator.updateCard(cardData.cardName, updates);
    },
    addActivity,
  };
};

export const createCard = (
  cardName: string,
  type: ListType
): ReturnType<typeof createCardClosure> => {
  const initialCardData: CardData = {
    cardName,
    typeList: type,
    cardTitle: null,
    action_url: null,
    cardIcon: 'folder',
    activities: [],
  };

  cardGenerator.createCard(cardName, initialCardData);

  return createCardClosure(initialCardData);
};

// Example usage:
export const createUrlsCard = (name: string) => createCard(name, 'urls')
export const createListsCard = (name: string) => createCard(name, 'lists')
export const createActivityCard = (name: string) => createCard(name, 'activities')
