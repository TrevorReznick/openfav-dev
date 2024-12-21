import { format, addDays } from 'date-fns'

class DateFormatter {
  private date: Date;

  constructor(timestamp: string) {
    if (!timestamp) {
      throw new Error('Timestamp is undefined or empty')
    }
    this.date = new Date(timestamp);
    if (isNaN(this.date.getTime())) {
      throw new Error(`Invalid time value: ${timestamp}`)
    }
  }

  format(formatString: string): string {
    return format(this.date, formatString)
  }

  addDays(days: number): DateFormatter {
    this.date = addDays(this.date, days)
    return this;
  }

  toISOString(): string {
    return this.date.toISOString()
  }
}

export function timeManager(timestamp: string): DateFormatter {
  try {
    return new DateFormatter(timestamp)
  } catch (error) {
    console.error(error.message)
    throw error; // Rilanciamo l'errore per gestirlo ulteriormente se necessario
  }
}

// Esempio di utilizzo
const timestamp = '2024-12-19T09:34:17.576Z' // Assicurati che il timestamp sia corretto

try {
  const dateTimeManager = timeManager(timestamp)

  // Formattazione
  const formattedDate = dateTimeManager.format('dd MMMM yyyy HH:mm:ss')
  console.log(formattedDate)

  // Calcoli
  dateTimeManager.addDays(1);
  console.log(dateTimeManager.toISOString())
} catch (error) {
  console.error(error.message)
}