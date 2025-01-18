import { COMPONENTS, TYPOGRAPHY, RESPONSIVE } from '~/config/styleCostants'
import {SPACING} from '~/config/styleCostants'


export const CARD = {
  CONTAINER: 'bg-white dark:bg-bgDark3 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl flex flex-col h-full',
  GRID: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-6',
  IMAGE: {
    WRAPPER: 'relative aspect-video overflow-hidden',
    IMG: 'w-full h-full object-cover',
  },
  CONTENT: {
    WRAPPER: 'flex flex-col flex-grow p-6',
    HEADER: 'flex items-start justify-between mb-4',
    BODY: 'flex-grow',
    FOOTER: 'mt-4 pt-4 border-t border-gray-200 dark:border-gray-700',
  },
  TYPOGRAPHY: {
    TITLE: 'text-xl font-semibold text-gray-900 dark:text-white mb-2',
    DESCRIPTION: 'text-gray-600 dark:text-gray-300 text-sm line-clamp-2',
    URL: 'text-sm text-gray-500 dark:text-gray-400',
  },
  META: {
    CONTAINER: 'flex items-center justify-between',
    LOGO: 'w-8 h-8 rounded-full',
    INFO: 'flex items-center space-x-2',
    DATE: 'text-sm text-gray-500 dark:text-gray-400',
  },
  TAGS: {
    CONTAINER: 'flex flex-wrap gap-2 mt-4',
    TAG: 'px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300',
  },
  COLORS: {
    VARIANTS: [
      'bg-pink-100 dark:bg-pink-900/20',
      'bg-blue-100 dark:bg-blue-900/20',
      'bg-purple-100 dark:bg-purple-900/20',
      'bg-green-100 dark:bg-green-900/20',
    ],
  },
};

