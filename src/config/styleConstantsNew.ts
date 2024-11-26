// Spacing & Layout System
export const SPACING = {
    VERTICAL: {
        SECTION: 'py-24',
        SECTION_RESPONSIVE: 'py-16 sm:py-20 lg:py-24',
        SUBSECTION: 'py-16',
        COMPONENT: 'py-8',
        ELEMENT: 'py-4'
    },
    MARGIN: {
        XXS: 'my-2',
        XS: 'my-4',
        SM: 'my-6',
        MD: 'my-8',
        LG: 'my-16',
        XL: 'my-24',
        FAQ: {
            TITLE: 'mb-7',
            HEADLINE: 'mb-7',
            H2: 'mb-16'
        },
        SECTION: {
            TOP: 'mt-6',
            BOTTOM: 'mb-8'
        }
    },
    PADDING: {
        BASE: 'p-4',
        HERO: 'px-8 sm:px-8 md:px-20 lg:px-4',
        HERO_SUB: 'px-8 sm:px-20 md:px-24 lg:px-24',
        CONTENT: 'px-12 sm:px-48'
    },
    GAP: {
        SM: 'gap-2',
        MD: 'gap-4',
        LG: 'gap-6',
        XL: 'gap-8'
    }
};

// Typography System
export const TYPOGRAPHY = {
    HEADING: {
        HERO: 'text-5xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide',
        HERO_SUB: 'text-4xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide',
        SECTION: 'text-4xl lg:text-5xl font-bold',
        CARD: 'text-xl font-bold'
    },
    TEXT: {
        TAGLINE: 'text-sm sm:text-base',
        SUBTITLE: 'text-sm lg:text-base xl:text-lg',
        BODY: 'text-base leading-loose',
        CARD: 'text-sm',
        HERO_TEXT_CARD: 'content-text-gray'
    },
    COLORS: {
        PRIMARY: 'text-primaryText',
        SECONDARY: 'text-secondaryText',
        ACCENT: 'text-secondaryColor',
        GRAY: 'text-gray-500',
        WHITE: 'text-white',
        SECTION_LIST_WHITE: 'mb-6 text-primaryText'
    }
};

// Component Base Styles
export const COMPONENTS = {
    CARD: {
        BASE: 'p-5 bg-bgDark3 rounded shadow-sm',
        PRICING: 'p-6 bg-bgDark2 rounded-lg shadow-md',
        TITLE: 'font-medium text-white',
        CONTENT: 'pt-1'
    },
    BUTTON: {
        BASE: 'w-64 h-12 rounded-xl font-bold flex justify-center items-center transition',
        PRIMARY: 'bg-primaryColor hover:bg-secondaryColor border-primaryColor',
        SECONDARY: 'bg-bgDark2 hover:bg-bgDark3 border-primaryColor',
        FULL: 'w-full px-3 py-4 text-white rounded-md focus:outline-none'
    },
    ICON: {
        BASE: 'bg-gradient-to-br from-blue-600 to-violet-600 rounded-lg'
    }
};

// Layout Patterns
export const LAYOUT = {
    CONTAINER: {
        BASE: 'w-full px-4 sm:px-6 lg:px-8',
        NARROW: 'max-w-4xl mx-auto px-4'
    },
    GRID: {
        FOUR: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7',
        THREE: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7',
        TWO: 'grid grid-cols-1 sm:grid-cols-2 gap-7'
    },
    FLEX: {
        CENTER: 'flex justify-center items-center',
        BETWEEN: 'flex justify-between items-center',
        COLUMN: 'flex flex-col'
    }
};

// Common Patterns
export const PATTERNS = {
    HERO_TITLE: `${TYPOGRAPHY.HEADING.HERO} ${TYPOGRAPHY.COLORS.PRIMARY} ${SPACING.PADDING.HERO}`,
    HERO_SUBTITLE: `${TYPOGRAPHY.HEADING.HERO_SUB} ${TYPOGRAPHY.COLORS.PRIMARY} ${SPACING.PADDING.HERO_SUB}`,
    SECTION_TITLE: `${TYPOGRAPHY.HEADING.SECTION} ${TYPOGRAPHY.COLORS.PRIMARY} ${SPACING.MARGIN.SECTION.TOP} ${SPACING.MARGIN.SECTION.BOTTOM}`,
    CARD_TITLE: `${COMPONENTS.CARD.TITLE}`,
    FAQ_SECTION: {
        TITLE: `${SPACING.MARGIN.FAQ.TITLE} block-subtitle text-center`,
        HEADLINE: `${SPACING.MARGIN.FAQ.HEADLINE} block-subtitle text-center`,
        H2: `${SPACING.MARGIN.FAQ.H2} block-big-title text-center`
    },
    HERO: {
        WRAPPER: 'px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-10 lg:py-20',
        TEXT: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-bold'
    },
    SECTION: {
        WRAPPER: 'px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-10 lg:py-20',
        GRID: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8'
    },
    FORM: {
        LAYOUT: 'flex flex-col space-y-4 sm:space-y-6 md:space-y-8',
        FIELD: 'w-full sm:w-2/3 md:w-1/2 lg:w-1/3'
    }
};

// Responsive Utilities
export const RESPONSIVE = {
    HIDE: {
        MOBILE: 'hidden sm:block',
        DESKTOP: 'sm:hidden',
        TABLET: 'md:hidden lg:block'
    },
    SPACING: {
        HERO_MARGIN: 'mt-16 sm:mt-32',
        CONTENT_PADDING: 'px-4 sm:px-6 lg:px-8'
    },
    TEXT: {
        RESPONSIVE: 'text-base sm:text-lg lg:text-xl'
    },
    CONTAINER: {
        BASE: 'w-full px-4',
        SM: 'sm:w-11/12 sm:px-6',
        MD: 'md:w-10/12 md:px-8',
        LG: 'lg:w-full lg:px-8',
        XL: 'xl:w-full',
        '2XL': '2xl:w-full'
    },
    TYPOGRAPHY: {
        HERO: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl',
        SUBTITLE: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl',
        BODY: 'text-sm sm:text-base md:text-lg',
        SMALL: 'text-xs sm:text-sm md:text-base'
    },
    LAYOUT: {
        GRID: {
            BASE: 'grid grid-cols-1',
            SM: 'sm:grid-cols-2',
            MD: 'md:grid-cols-3',
            LG: 'lg:grid-cols-4'
        },
        FLEX: {
            DIRECTION: 'flex flex-col sm:flex-row',
            WRAP: 'flex-wrap sm:flex-nowrap'
        },
        GAP: {
            BASE: 'gap-4',
            SM: 'sm:gap-6',
            MD: 'md:gap-8',
            LG: 'lg:gap-10'
        }
    },
    COMPONENTS: {
        NAVBAR: {
            HEIGHT: 'h-16 sm:h-20',
            PADDING: 'px-4 sm:px-6 lg:px-8'
        },
        SIDEBAR: {
            WIDTH: 'w-64 sm:w-72 lg:w-80',
            DISPLAY: 'hidden sm:block'
        },
        CARD: {
            PADDING: 'p-4 sm:p-6 lg:p-8',
            MARGIN: 'm-2 sm:m-4 lg:m-6'
        },
        BUTTON: {
            PADDING: 'px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4',
            WIDTH: 'w-full sm:w-auto'
        }
    },
    UTILITIES: {
        SHOW: {
            MOBILE: 'block sm:hidden',
            DESKTOP: 'hidden sm:block',
            TABLET: 'hidden md:block lg:hidden'
        },
        PADDING: {
            X: 'px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12',
            Y: 'py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12'
        },
        MARGIN: {
            X: 'mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12',
            Y: 'my-4 sm:my-6 md:my-8 lg:my-10 xl:my-12'
        }
    }
};

// Animation Utilities
export const ANIMATIONS = {
    HOVER: {
        SCALE: 'hover:scale-110 transition duration-300',
        OPACITY: 'hover:opacity-80 transition duration-300'
    },
    TRANSITION: {
        BASE: 'transition-all duration-300',
        FAST: 'transition-all duration-150',
        SLOW: 'transition-all duration-500'
    }
};

// Helper to combine responsive classes
export const combineResponsive = (...classes: string[]) => classes.join(' ');

// Function to get friendly name constants
export const getFriendlyNames = () => ({
    show: RESPONSIVE.UTILITIES.SHOW,
    spacing: {
        section: SPACING.VERTICAL.SECTION,
        subsection: SPACING.VERTICAL.SUBSECTION,
        margin: {
            small: SPACING.MARGIN.SM,
            medium: SPACING.MARGIN.MD,
            large: SPACING.MARGIN.LG
        },
        padding: {
            base: SPACING.PADDING.BASE,
            hero: SPACING.PADDING.HERO
        }
    },
    typography: {
        heading: {
            hero: TYPOGRAPHY.HEADING.HERO,
            section: TYPOGRAPHY.HEADING.SECTION
        },
        text: {
            body: TYPOGRAPHY.TEXT.BODY,
            tagline: TYPOGRAPHY.TEXT.TAGLINE
        }
    },
    components: {
        card: COMPONENTS.CARD.BASE,
        button: COMPONENTS.BUTTON.PRIMARY
    },
    layout: {
        container: LAYOUT.CONTAINER.BASE,
        grid: LAYOUT.GRID.FOUR
    },
    patterns: {
        heroTitle: PATTERNS.HERO_TITLE,
        sectionTitle: PATTERNS.SECTION_TITLE
    },
    animations: {
        hoverScale: ANIMATIONS.HOVER.SCALE,
        transitionBase: ANIMATIONS.TRANSITION.BASE
    }
});

// Examples of usage
export const EXAMPLES = {
    HERO_SECTION: combineResponsive(
        RESPONSIVE.CONTAINER.BASE,
        RESPONSIVE.CONTAINER.SM,
        RESPONSIVE.CONTAINER.MD,
        PATTERNS.HERO.WRAPPER
    ),
    CARD_GRID: combineResponsive(
        RESPONSIVE.LAYOUT.GRID.BASE,
        RESPONSIVE.LAYOUT.GRID.SM,
        RESPONSIVE.LAYOUT.GRID.MD,
        RESPONSIVE.LAYOUT.GAP.BASE,
        RESPONSIVE.LAYOUT.GAP.SM
    )
}

/* 
import { getFriendlyNames } from '../constants/theme.constants'; // Assicurati di usare il percorso corretto


const friendlyNames = getFriendlyNames();
---

<div class={friendlyNames.spacing.section}>

*/