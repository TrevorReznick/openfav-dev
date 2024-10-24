export interface FeatureItem1 {
    title: string;
    description: string;
    icon: string;
}
  
  // Puoi poi usare il tipo nell'array di items
export const FeaturedItems1: FeatureItem1[] = [
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