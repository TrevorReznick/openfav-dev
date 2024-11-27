// responsive.constants.ts

export const RESPONSIVE_RULES = {
    // Container widths
    CONTAINER: {
        BASE: 'w-full px-4 !important',
        SM: 'sm:w-11/12 sm:px-6 !important',
        MD: 'md:w-10/12 md:px-8 !important',
        LG: 'lg:max-w-7xl lg:px-8 !important',
        XL: 'xl:w-10/12 !important',
        '2XL': '2xl:w-[1280px] !important'
    },

    // Typography scaling
    TEXT: {
        HERO: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl !important',
        SUBTITLE: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl !important',
        BODY: 'text-sm sm:text-base md:text-lg !important',
        SMALL: 'text-xs sm:text-sm md:text-base !important'
    },

    // Spacing system
    SPACING: {
        SECTION: {
            MARGIN: 'my-8 sm:my-12 md:my-16 lg:my-20 xl:my-24 !important',
            PADDING: 'py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 !important'
        },
        COMPONENT: {
            MARGIN: 'my-4 sm:my-6 md:my-8 lg:my-10 !important',
            PADDING: 'py-4 sm:py-6 md:py-8 lg:py-10 !important'
        }
    },

    // Layout patterns
    LAYOUT: {
        GRID: {
            BASE: 'grid grid-cols-1 !important',
            SM: 'sm:grid-cols-2 !important',
            MD: 'md:grid-cols-3 !important',
            LG: 'lg:grid-cols-4 !important'
        },
        FLEX: {
            DIRECTION: 'flex flex-col sm:flex-row !important',
            WRAP: 'flex-wrap sm:flex-nowrap !important'
        },
        GAP: {
            BASE: 'gap-4 !important',
            SM: 'sm:gap-6 !important',
            MD: 'md:gap-8 !important',
            LG: 'lg:gap-10 !important'
        }
    },

    // Component specific
    COMPONENTS: {
        NAVBAR: {
            HEIGHT: 'h-16 sm:h-20 !important',
            PADDING: 'px-4 sm:px-6 lg:px-8 !important'
        },
        SIDEBAR: {
            WIDTH: 'w-64 sm:w-72 lg:w-80 !important',
            DISPLAY: 'hidden sm:block !important'
        },
        CARD: {
            PADDING: 'p-4 sm:p-6 lg:p-8 !important',
            MARGIN: 'm-2 sm:m-4 lg:m-6 !important'
        },
        BUTTON: {
            PADDING: 'px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 !important',
            WIDTH: 'w-full sm:w-auto !important'
        }
    },

    // Utilities
    UTILITIES: {
        HIDE: {
            MOBILE: 'hidden sm:block !important',
            DESKTOP: 'sm:hidden !important',
            TABLET: 'md:hidden lg:block !important'
        },
        SHOW: {
            MOBILE: 'block sm:hidden !important',
            DESKTOP: 'hidden sm:block !important',
            TABLET: 'hidden md:block lg:hidden !important'
        },
        PADDING: {
            X: 'px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 !important',
            Y: 'py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 !important'
        },
        MARGIN: {
            X: 'mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12 !important',
            Y: 'my-4 sm:my-6 md:my-8 lg:my-10 xl:my-12 !important'
        }
    },

    // Common patterns
    PATTERNS: {
        HERO: {
            WRAPPER: 'px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-10 lg:py-20 !important',
            TEXT: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-bold !important'
        },
        SECTION: {
            WRAPPER: 'px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-10 lg:py-20 !important',
            GRID: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 !important'
        },
        FORM: {
            LAYOUT: 'flex flex-col space-y-4 sm:space-y-6 md:space-y-8 !important',
            FIELD: 'w-full sm:w-2/3 md:w-1/2 lg:w-1/3 !important'
        }
    }
};

// Helper per combinare classi responsive
export const combineResponsive = (...classes: string[]) => classes.join(' ');

// Esempi di utilizzo
export const EXAMPLES = {
    HERO_SECTION: combineResponsive(
        RESPONSIVE_RULES.CONTAINER.BASE,
        RESPONSIVE_RULES.CONTAINER.SM,
        RESPONSIVE_RULES.CONTAINER.MD,
        RESPONSIVE_RULES.PATTERNS.HERO.WRAPPER
    ),
    CARD_GRID: combineResponsive(
        RESPONSIVE_RULES.LAYOUT.GRID.BASE,
        RESPONSIVE_RULES.LAYOUT.GRID.SM,
        RESPONSIVE_RULES.LAYOUT.GRID.MD,
        RESPONSIVE_RULES.LAYOUT.GAP.BASE,
        RESPONSIVE_RULES.LAYOUT.GAP.SM
    )
};

/*
La funzione combineResponsive è progettata per combinare più classi CSS in una singola stringa. Questo è utile quando vuoi applicare diverse regole responsive a un singolo elemento del tuo componente React o HTML.

Esempi di Utilizzo
Esempio 1: Sezione Hero
Nell'esempio HERO_SECTION, le classi vengono combinate per creare una sezione hero che si adatta a diversi dispositivi:

export const HERO_SECTION = combineResponsive(
  RESPONSIVE_RULES.CONTAINER.BASE,
  RESPONSIVE_RULES.CONTAINER.SM,
  RESPONSIVE_RULES.CONTAINER.MD,
  RESPONSIVE_RULES.PATTERNS.HERO.WRAPPER
);
		
In questo caso, la sezione hero avrà:

w-full px-4 !important per dispositivi base (piccoli schermi).
sm:w-11/12 sm:px-6 !important per dispositivi piccoli (smartphone).
md:w-10/12 md:px-8 !important per dispositivi medi (tablet).
px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-10 lg:py-20 !important per wrappare il contenuto del hero.
Esempio 2: Griglia di Card
Nell'esempio CARD_GRID, le classi vengono combinate per creare una griglia di card che si adatta a diversi dispositivi:

export const CARD_GRID = combineResponsive(
  RESPONSIVE_RULES.LAYOUT.GRID.BASE,
  RESPONSIVE_RULES.LAYOUT.GRID.SM,
  RESPONSIVE_RULES.LAYOUT.GRID.MD,
  RESPONSIVE_RULES.LAYOUT.GAP.BASE,
  RESPONSIVE_RULES.LAYOUT.GAP.SM
);
		
In questo caso, la griglia di card avrà:

grid grid-cols-1 !important per dispositivi base (piccoli schermi).
sm:grid-cols-2 !important per dispositivi piccoli (smartphone).
md:grid-cols-3 !important per dispositivi medi (tablet).
gap-4 !important per dispositivi base (piccoli schermi).
sm:gap-6 !important per dispositivi piccoli (smartphone).
Come Applicare le Classi nei Componenti
Per applicare queste classi nei tuoi componenti React, puoi fare qualcosa del genere:

import React from 'react';
import { HERO_SECTION, CARD_GRID } from './responsive.constants';

const HeroSection = () => {
  return (
    <section className={HERO_SECTION}>
      <h1 className={RESPONSIVE_RULES.TEXT.HERO}>Benvenuto!</h1>
      <p className={RESPONSIVE_RULES.TEXT.BODY}>Questa è la nostra sezione hero.</p>
    </section>
  );
};

const CardGrid = () => {
  return (
    <div className={CARD_GRID}>
      <div className={RESPONSIVE_RULES.COMPONENTS.CARD.PADDING}>
        <h2>Card 1</h2>
        <p>Contenuto della card 1.</p>
      </div>
      <div className={RESPONSIVE_RULES.COMPONENTS.CARD.PADDING}>
        <h2>Card 2</h2>
        <p>Contenuto della card 2.</p>
      </div>      
      </div>
    );
  };
  
  export { HeroSection, CardGrid };
  */