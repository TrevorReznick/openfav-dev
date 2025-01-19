export const CARD = {
  GRID: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3", // Reduced gap from 4 to 3
  CONTAINER: "bg-white dark:bg-gray-800 rounded-md shadow-sm overflow-hidden flex flex-col h-[135%]",
  COLORS: {
    VARIANTS: [
      "border border-blue-100 dark:border-blue-800",
      "border border-green-100 dark:border-green-800",
      "border border-purple-100 dark:border-purple-800"
    ]
  },
  IMAGE: {
    WRAPPER: "relative w-full h-[62px]", // Increased from h-[46px] to h-[62px] (approximately 35% increase)
    IMG: "w-full h-full object-cover"
  },
  CONTENT: {
    WRAPPER: "p-2.5 sm:p-3", // Reduced from p-3
    HEADER: "flex justify-between items-start mb-1", // Reduced margin
    BODY: "space-y-1", // Reduced spacing
    FOOTER: "mt-2.5" // Reduced margin
  },
  TYPOGRAPHY: {
    TITLE: "text-[13px] sm:text-sm font-semibold", // Reduced from text-base
    DESCRIPTION: "text-[11.5px] text-gray-600 dark:text-gray-300 line-clamp-2", // Reduced from text-xs
    URL: "text-[11.5px] font-medium" // Reduced from text-xs
  },
  TAGS: {
    CONTAINER: "flex flex-wrap gap-1.5", // Reduced gap
    TAG: "text-[11.5px] px-1 py-0.5 bg-gray-100 dark:bg-gray-700 rounded-full" // Reduced padding
  },
  META: {
    CONTAINER: "flex items-center justify-between text-xs text-gray-500 dark:text-gray-400", // Reduced from text-sm
    INFO: "flex items-center space-x-1.5", // Reduced spacing
    LOGO: "w-4 h-4 rounded-full", // Reduced from w-4 h-4
    DATE: "text-xs"
  }
}

