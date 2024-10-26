export interface FeatureItem {
    title: string;
    description: string;
    icon: string;
}
  
  // Puoi poi usare il tipo nell'array di items
export const FeaturedItems1: FeatureItem[] = [
    {
        title: 'High-Quality Designs',
        description:
            'Our templates feature top-tier designs that ensure a professional and polished appearance for your projects.',
        icon: 'tabler:wand',
    },
    {
        title: 'Customization Tools',
        description:
            'Tailor each template to your unique needs with user-friendly customization tools that let you personalize colors, fonts, and content.',
        icon: 'tabler:settings',
    },
    {
        title: 'Pre-Designed Elements',
        description:
            'Save time and effort with our ready-to-use elements, including graphics, icons, and layouts that enhance the visual appeal of your creations.',
        icon: 'tabler:presentation',
    },
    {
        title: 'Preview and Mockup Views',
        description:
            'Visualize the final outcome before making any changes using our preview and mockup views, ensuring your projects meet your expectations.',
        icon: 'tabler:carousel-horizontal',
    },
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
