// Spacing system constants
export const SPACING = {
    // Base vertical spacing
    SECTION_SPACING: 'py-24 !important',
    SUBSECTION_SPACING: 'py-16 !important',
    COMPONENT_SPACING: 'py-8 !important',
    ELEMENT_SPACING: 'py-4 !important',

    // Responsive section spacing
    SECTION_SPACING_RESPONSIVE: 'py-16 sm:py-20 lg:py-24 !important',

    // Margins when needed
    MARGIN_LARGE: 'my-24 !important',
    MARGIN_MEDIUM: 'my-16 !important',
    MARGIN_SMALL: 'my-8 !important',

    // Grid/Flex gaps
    GAP_LARGE: 'gap-8 !important',
    GAP_MEDIUM: 'gap-6 !important',
    GAP_SMALL: 'gap-4 !important'
};

// Layout constants
export const LAYOUT = {
    // Container
    CONTAINER: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 !important',

    // Navigation
    NAV_HEIGHT: 'h-20 !important',
    MOBILE_NAV: 'pt-20 pb-8 !important',

    // Grid layouts
    GRID_FOUR: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 !important',
    GRID_THREE: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 !important',
    GRID_TWO: 'grid grid-cols-1 sm:grid-cols-2 gap-7 !important'
};

// Component specific constants
export const COMPONENTS = {
    // Cards
    CARD_BASE: 'p-5 bg-bgDark3 rounded shadow-sm !important',
    CARD_CONTENT: 'pt-1 !important',

    // Hero section
    HERO_WRAPPER: 'flex flex-col items-center py-24 !important',
    HERO_CONTENT: 'text-center max-w-4xl mx-auto px-4 !important',

    // CTAs
    CTA_WRAPPER: 'flex flex-col sm:flex-row gap-4 justify-center py-8 !important',
    CTA_BUTTON: 'w-64 h-12 rounded-xl font-bold flex justify-center items-center !important'
};

// Text spacing constants
export const TEXT_SPACING = {
    HEADER_SPACING: 'mb-6 !important',
    PARAGRAPH_SPACING: 'mb-4 !important',
    LIST_SPACING: 'space-y-2 !important'
};

// Combined commonly used patterns
export const PATTERNS = {
    SECTION_CONTAINER: `${LAYOUT.CONTAINER} ${SPACING.SECTION_SPACING}`,
    CARD_GRID: `${LAYOUT.GRID_FOUR} ${SPACING.COMPONENT_SPACING}`,
    HERO_SECTION: `${COMPONENTS.HERO_WRAPPER} ${SPACING.SECTION_SPACING_RESPONSIVE}`
};

// Animation/Transition constants (if needed)
export const ANIMATIONS = {
    HOVER_SCALE: 'hover:scale-110 transition duration-300 !important',
    HOVER_OPACITY: 'hover:opacity-80 transition duration-300 !important'
};

// Responsive breakpoint patterns
export const RESPONSIVE = {
    HIDE_MOBILE: 'hidden sm:block !important',
    HIDE_DESKTOP: 'sm:hidden !important',
    TEXT_RESPONSIVE: 'text-base sm:text-lg lg:text-xl !important'
};