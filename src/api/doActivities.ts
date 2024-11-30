import {initCardTest} from '~/api/doCardsNewV1'

const urlsCardNew = initCardTest('urls', 'my cardname')
const listsCardnew = initCardTest('lists', 'another cardname')

// Add activities
urlsCardNew().addActivity('Created List', 'folder', {
  description: 'Card creata da Vincenzo Navarra',
  name: 'Enzo'
})
urlsCardNew().addActivity('Created List', 'clock', {
  description: 'Card creata da Luigi Frisco',
  name: 'Enzo'
})

listsCardnew().addActivity('Updated List', 'clock', {
  description: 'Lista aggiornata da Dino di Piazza',
  name: 'Maria'
})

// Get the card data
console.log(urlsCardNew().getCardData())
console.log(urlsCardNew().getCardData())