export const CARD = {
  GRID: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3",
  CONTAINER: "bg-white dark:bg-gray-800 rounded-md shadow-sm overflow-hidden flex flex-col h-full",
  COLORS: {
    VARIANTS: [
      "border border-blue-100 dark:border-blue-800",
      "border border-green-100 dark:border-green-800",
      "border border-purple-100 dark:border-purple-800"
    ]
  },
  IMAGE: {
    WRAPPER: "relative w-full h-[170px]",
    IMG: "w-full h-full object-cover"
  },
  CONTENT: {
    WRAPPER: "p-2.5 sm:p-3",
    HEADER: "flex justify-between items-start mb-1",
    BODY: "space-y-1",
    FOOTER: "mt-2.5"
  },
  TYPOGRAPHY: {
    TITLE: "text-[13px] sm:text-sm font-semibold",
    DESCRIPTION: "text-[11.5px] text-gray-600 dark:text-gray-300 line-clamp-2",
    URL: "text-[11.5px] font-medium"
  },
  TAGS: {
    CONTAINER: "flex flex-wrap gap-1.5",
    TAG: "text-[11.5px] px-1 py-0.5 bg-gray-100 dark:bg-gray-700 rounded-full"
  },
  META: {
    CONTAINER: "flex items-center justify-between text-xs text-gray-500 dark:text-gray-400",
    INFO: "flex items-center space-x-1.5",
    LOGO: "w-4 h-4 rounded-full",
    DATE: "text-xs"
  }
}