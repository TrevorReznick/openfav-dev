
import type {
    CardProps,
    FeatureItem, 
    RecentActivity, 
    UserActivity, 
    personalCardListItem
} from '~/types'

/* @@ Dashboard Main Card Activies @@ */

export const recentListsData: CardProps = {
    typeList: 'lists',
    cardName: 'Your Personal Lists',
    cardIcon: 'FolderHeart',
    activities: [
        {
            action: 'Created List',
            actionIcon: 'Folder',
            timestamp: null,
            description: 'Today is a great day',
            name: 'enzonax'
        },
        {
            action: 'Deleted List',
            actionIcon: 'Folder',
            timestamp: null,
            description: 'Today is a anther great day',
            name: 'enzonax'
        },
    ]
}

export const recentActivityData: CardProps = {
    typeList: 'activities',
    cardName: 'Recent Activity',
    cardIcon: 'Activity',
    activities: [
      {
        action: 'Created List',
        actionIcon: 'Folder',
        timestamp: null,
        description: 'Today is a great day',
        name: 'enzonax'
      },
      {
        action: 'Added link',
        actionIcon: 'Link',
        timestamp: '3 hours ago',
        description: null,
        name: 'enzonax'
      },
      {
        action: 'Deleted List',
        actionIcon: 'Folder',
        description: null,
        timestamp: '3 hours ago',
        name: 'enzonax'
      },
      {
        action: 'Deleted List',
        actionIcon: 'Bot',
        description: null,
        timestamp: '3 hours ago',
        name: 'enzonax'
      }
  
    ]
}
/* @@ home featured items @@ */

  
  // Puoi poi usare il tipo nell'array di items

export const ListsCardsitems: personalCardListItem[] = [
    { 
        name: 'Progetti Web', 
        description: 'Link utili per lo sviluppo web', 
        icon: 'Folder' 
    },
    { 
        name: 'Risorse AI', 
        description: 'Articoli e tutorial sull\'intelligenza artificiale', 
        icon: 'Bot' 
    },
    { 
        name: 'Scholl Links', 
        description: 'Links per produttività', 
        icon: 'Book' 
    },
]

export const FeaturedItems1: FeatureItem[] = [
    {
        title: "Stop boring searching something 'i was sure to found here'",
        description:
            'Stop lose track of important resources. Organize and retrieve them in seconds. Say goodbye to endlessly searching for links',
        icon: 'tabler:carousel-horizontal',
    },
    {
        title: 'Save time letting AI classify for you',
        description:
            'Let the AI classify your resources for you, ensuring everything is organized and easy to find',
        icon: 'tabler:wand',
    },
    {
        title: 'Personalize your work and manage the the poor browser bookmarks management',
        description:
            'Create personalized lists and tags for an even more tailored resource management experience. Organize, tag, and find your resources with ease.',
        icon: 'tabler:settings',
    },
    {
        title: 'Share your resource easily',
        description:
            'Update and organize your favorite resources directly from the app, ensuring you always have quick access to what matters most.',
        icon: 'tabler:presentation',
    }
]

export const FeaturedItems2: FeatureItem[] = [
    {
        title: 'Favourites',
        description:
            'Manage and organize your bookmarks following your field of interest; export your lists in the browsers.',
        icon: 'flat-color-icons:bookmark',
    },
    {
        title: 'Production',
        description:
            'Manage and organize your production and developement flow; generate personal blog or project portfolio.',
        icon: 'flat-color-icons:workflow',
    },
    {
        title: 'AI Assist',
        description:
            'Use AI to do tasks for categorize automatically useful resources.',
        icon: 'tabler:ai',        
    },
]

export const StepItems: FeatureItem[] = [
    {
        title: 'Step 1: <span class="font-medium">Create account</span>',
        description:
            "Create account or use provided social authenticator to log in",
        icon: 'tabler:package',
    },
    {
        title: 'Step 2: <span class="font-medium">Download browser extension</span>',
        description:
            'Download our browser extension to save and classify the web resource with one click',
        icon: 'tabler:letter-case',
    },
    {
        title: 'Step 3: <span class="font-medium">Customize list</span>',
        description:
            'Since the beginning, you can manage projects, resources, articles, list of tools in your Dashboard',
        icon: 'tabler:paint',
    },
    {
        title: 'Ready!',
        icon: 'tabler:check',
    },
]

/* @@ dashboard featured items @@ */

export const ExampleItems: FeatureItem[] = [
    {
        title: "Installation Instructions",
        description: "Offer clear instructions on how to download the purchased templates and install them on various website platforms or content management systems.",
        icon: "flat-color-icons:bookmark",
    },
    {
        title: "Demo and Previews",
        description: "Provide interactive demos and previews that allow customers to see how their chosen template will look and function before making a purchase.",
        icon: "flat-color-icons:template",
    },
    {
        title: "Technical Support",
        description: "Providing customer support for any technical issues related to the templates or their implementation.",
        icon: "flat-color-icons:voice-presentation",
    }
]

export const ExampleActivities: RecentActivity = {    
    newLinks: 5,
    updatedLists: 2,
    updatesFavorites: 4,
    lastActive: "2 ore fa"
}

export const ExampleUserActivities: UserActivity[] = [
    {
      id: 1,
      user: 'Sarah Chen',
      action: 'deployed new features to dashboard.example.com',
      timestamp: '10 minutes ago'
    },
    {
      id: 2,
      user: 'Alex Morgan',
      action: 'updated blog platform theme',
      timestamp: '2 hours ago'
    },
    {
      id: 3,
      user: 'Jamie Wilson',
      action: 'added new portfolio projects',
      timestamp: '5 hours ago'
    }
]

export const ExampleActivitiesTest: RecentActivity = {
    newLinks: 5,
    updatedLists: 2,
    updatesFavorites: 4,
    lastActive: "2 ore fa"
}

/* old config, just for debug purposes */
export interface Card {
    id: number;
    title: string;
    subtitle: string;
    url: string;
    tags: string[];
    image: string;
  }
  
  export const cards: Card[] = [
    {
      id: 1,
      title: "Modern Architecture",
      subtitle: "Contemporary design principles",
      url: "https://architecture.example",
      tags: ["Design", "Modern", "Innovation"],
      image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
      id: 2,
      title: "Digital Photography",
      subtitle: "Capturing moments in pixels",
      url: "https://photography.example",
      tags: ["Art", "Digital", "Creative"],
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
      id: 3,
      title: "Urban Planning",
      subtitle: "Creating sustainable cities",
      url: "https://urban.example",
      tags: ["City", "Planning", "Future"],
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
      id: 4,
      title: "Tech Innovation",
      subtitle: "Next-gen solutions",
      url: "https://tech.example",
      tags: ["Technology", "Innovation", "Future"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
      id: 5,
      title: "Nature Explorer",
      subtitle: "Discovering Earth's beauty",
      url: "https://nature.example",
      tags: ["Nature", "Adventure", "Travel"],
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
      id: 6,
      title: "Art & Culture",
      subtitle: "Global creative expressions",
      url: "https://art.example",
      tags: ["Art", "Culture", "Global"],
      image: "https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?auto=format&fit=crop&q=80&w=400&h=400"
    },
  ]
