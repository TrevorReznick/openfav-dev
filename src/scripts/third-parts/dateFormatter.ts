import { format, addDays } from 'date-fns'

const timestamp = '2024-12-19T09:34:17.576Z'
const date = new Date(timestamp)

// Formattazione
const formattedDate = format(date, 'dd MMMM yyyy HH:mm:ss')
console.log(formattedDate);

// Calcoli
const tomorrow = addDays(date, 1)
console.log(tomorrow.toISOString())