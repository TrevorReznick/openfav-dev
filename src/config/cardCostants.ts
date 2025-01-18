import { COMPONENTS, TYPOGRAPHY, RESPONSIVE } from '~/config/styleCostants'
import {SPACING} from '~/config/styleCostants'

export const CARD = {
  CONTAINER: {
    BASE: `${COMPONENTS.CARD.BASE} hover:shadow-md transition-shadow duration-300 overflow-hidden`,
    SITE: 'w-full sm:w-11/12 md:w-10/12',
  },
  CONTENT: {
    WRAPPER: 'flex flex-col md:flex-row',
    IMAGE: 'md:w-48 h-48 md:h-auto',
    DETAILS: 'flex-1 p-6',
  },
  TYPOGRAPHY: {
    TITLE: `${TYPOGRAPHY.HEADING.CARD} ${TYPOGRAPHY.COLORS.PRIMARY}`,
    URL: `${TYPOGRAPHY.TEXT.CARD} ${TYPOGRAPHY.COLORS.SECONDARY}`,
    TAG: 'text-sm',
    LAST_UPDATED: `${TYPOGRAPHY.TEXT.CARD} ${TYPOGRAPHY.COLORS.SECONDARY}`,
  },
  ICON: {
    BASE: 'w-4 h-4',
    BUTTON: 'w-5 h-5',
  },
  TAGS: {
    CONTAINER: 'flex flex-wrap gap-2',
    TAG: 'px-3 py-1 bg-bgDark2 text-secondaryColor rounded-full',
  },
  SPACING: {
    SECTION: `${SPACING.MARGIN.XS}`,
    ICON_GAP: `${SPACING.GAP.SM}`,
  },
};

export const FEATURE_CARD = {
  CONTAINER: `${CARD.CONTAINER.BASE} w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/3`,
  CONTENT: {
    WRAPPER: 'flex flex-col px-6 py-4 text-center',
  },
  // Aggiungi qui altri stili specifici per le Feature Card se necessario
};

export const SITE_CARD = {
  ...CARD,
  CONTAINER: `${CARD.CONTAINER.BASE} ${CARD.CONTAINER.SITE}`,
};

