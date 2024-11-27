// theme.constants.ts

// Spacing & Layout System
export const SPACING = {
    VERTICAL: {
        SECTION: 'py-24 !important',
        SECTION_RESPONSIVE: 'py-16 sm:py-20 lg:py-24 !important',
        SUBSECTION: 'py-16 !important',
        COMPONENT: 'py-8 !important',
        ELEMENT: 'py-4 !important'
    },
    MARGIN: {
        XXS: 'my-2 !important',
        XS: 'my-4 !important',
        SM: 'my-6 !important',
        MD: 'my-8 !important',
        LG: 'my-16 !important',
        XL: 'my-24 !important',
        // Specifici per FAQ e Sections
        FAQ_TITLE: 'mb-7 !important',
        FAQ_HEADLINE: 'mb-7 !important',
        FAQ_H2: 'mb-16 !important',
        SECTION_TOP: 'mt-6 !important',
        SECTION_BOTTOM: 'mb-8 !important'
    },
    PADDING: {
        BASE: 'p-4 !important',
        HERO: 'px-8 sm:px-8 md:px-20 lg:px-4 !important',
        HERO_SUB: 'px-8 sm:px-20 md:px-24 lg:px-24 !important',
        CONTENT: 'px-12 sm:px-48 !important'
    },
    GAP: {
        SM: 'gap-2 !important',
        MD: 'gap-4 !important',
        LG: 'gap-6 !important',
        XL: 'gap-8 !important'
    }
};

// Typography System
export const TYPOGRAPHY = {
    HEADING: {
        HERO: 'text-5xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide !important',
        HERO_SUB: 'text-4xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide !important',
        SECTION: 'text-4xl lg:text-5xl font-bold !important',
        CARD: 'text-xl font-bold !important'
    },
    TEXT: {
        TAGLINE: 'text-sm sm:text-base !important',
        SUBTITLE: 'text-sm lg:text-base xl:text-lg !important',
        BODY: 'text-base leading-loose !important',
        CARD: 'text-sm !important'
    },
    COLORS: {
        PRIMARY: 'text-primaryText !important',
        SECONDARY: 'text-secondaryText !important',
        ACCENT: 'text-secondaryColor !important',
        GRAY: 'text-gray-500 !important',
        WHITE: 'text-white !important'
    }
};

// Component Base Styles
export const COMPONENTS = {
    CARD: {
        BASE: 'p-5 bg-bgDark3 rounded shadow-sm !important',
        PRICING: 'p-6 bg-bgDark2 rounded-lg shadow-md !important',
        TITLE: 'font-medium text-white !important',
        CONTENT: 'pt-1 !important'
    },
    BUTTON: {
        BASE: 'w-64 h-12 rounded-xl font-bold flex justify-center items-center transition !important',
        PRIMARY: 'bg-primaryColor hover:bg-secondaryColor border-primaryColor !important',
        SECONDARY: 'bg-bgDark2 hover:bg-bgDark3 border-primaryColor !important',
        FULL: 'w-full px-3 py-4 text-white rounded-md focus:outline-none !important'
    },
    ICON: {
        BASE: 'bg-gradient-to-br from-blue-600 to-violet-600 rounded-lg !important'
    }
};

// Layout Patterns
export const LAYOUT = {
    CONTAINER: {
        BASE: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 !important',
        NARROW: 'max-w-4xl mx-auto px-4 !important'
    },
    GRID: {
        FOUR: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 !important',
        THREE: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 !important',
        TWO: 'grid grid-cols-1 sm:grid-cols-2 gap-7 !important'
    },
    FLEX: {
        CENTER: 'flex justify-center items-center !important',
        BETWEEN: 'flex justify-between items-center !important',
        COLUMN: 'flex flex-col !important'
    }
};

// Common Patterns
export const PATTERNS = {
    HERO_TITLE: `${TYPOGRAPHY.HEADING.HERO} ${TYPOGRAPHY.COLORS.PRIMARY} ${SPACING.PADDING.HERO}`,
    HERO_SUBTITLE: `${TYPOGRAPHY.HEADING.HERO_SUB} ${TYPOGRAPHY.COLORS.PRIMARY} ${SPACING.PADDING.HERO_SUB}`,
    SECTION_TITLE: `${TYPOGRAPHY.HEADING.SECTION} ${TYPOGRAPHY.COLORS.PRIMARY} ${SPACING.MARGIN.SECTION_TOP} ${SPACING.MARGIN.SECTION_BOTTOM}`,
    CARD_TITLE: `${COMPONENTS.CARD.TITLE}`,
    FAQ_SECTION: {
        TITLE: `${SPACING.MARGIN.FAQ_TITLE} block-subtitle text-center !important`,
        HEADLINE: `${SPACING.MARGIN.FAQ_HEADLINE} block-subtitle text-center !important`,
        H2: `${SPACING.MARGIN.FAQ_H2} block-big-title text-center !important`
    }
};

// Responsive Utilities
export const RESPONSIVE = {
    HIDE: {
        MOBILE: 'hidden sm:block !important',
        DESKTOP: 'sm:hidden !important'
    },
    SPACING: {
        HERO_MARGIN: 'mt-16 sm:mt-32 !important',
        CONTENT_PADDING: 'px-4 sm:px-6 lg:px-8 !important'
    },
    TEXT: {
        RESPONSIVE: 'text-base sm:text-lg lg:text-xl !important'
    }
};

// Animation Utilities
export const ANIMATIONS = {
    HOVER: {
        SCALE: 'hover:scale-110 transition duration-300 !important',
        OPACITY: 'hover:opacity-80 transition duration-300 !important'
    },
    TRANSITION: {
        BASE: 'transition-all duration-300 !important',
        FAST: 'transition-all duration-150 !important',
        SLOW: 'transition-all duration-500 !important'
    }
};