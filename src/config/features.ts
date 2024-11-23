
import type {FeatureItem, RecentActivity} from '~/types'


/* @@ home featured items @@ */
  
  // Puoi poi usare il tipo nell'array di items
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



