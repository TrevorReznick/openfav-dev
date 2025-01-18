document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('input[type="search"]')
    const gridButton = document.querySelector('[aria-label="Grid view"]')
    const listButton = document.querySelector('[aria-label="List view"]')
    const cardsContainer = document.querySelector('.site-cards-container')
  
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const query = (e.target as HTMLInputElement).value.toLowerCase()
        // Implement search functionality
      });
    }
  
    if (gridButton && listButton && cardsContainer) {
      gridButton.addEventListener('click', () => {
        cardsContainer.classList.remove('view-list')
        cardsContainer.classList.add('view-grid')
        gridButton.classList.add('bg-white', 'dark:bg-bgDark3', 'text-primaryColor', 'shadow-sm')
        listButton.classList.remove('bg-white', 'dark:bg-bgDark3', 'text-primaryColor', 'shadow-sm')
      })
  
      listButton.addEventListener('click', () => {
        cardsContainer.classList.remove('view-grid')
        cardsContainer.classList.add('view-list')
        listButton.classList.add('bg-white', 'dark:bg-bgDark3', 'text-primaryColor', 'shadow-sm')
        gridButton.classList.remove('bg-white', 'dark:bg-bgDark3', 'text-primaryColor', 'shadow-sm')
      })
    }
  })