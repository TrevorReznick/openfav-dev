export function processMessage(message) {
  // Aggiungi un "alert" al messaggio
  const alertMessage = `ALERT: ${message}`
  console.log('Processed message:', alertMessage)
  return alertMessage
}

export const printFullObject = (obj) => {
  const fullString = JSON.stringify(obj, null, 2)
  console.log(fullString)
}

export function analyzeObject(obj: any, name: string = 'object') {
  console.log(`\n=== Analisi di ${name} ===`);
  
  // Funzione ricorsiva per analizzare le proprietà
  function analyze(value: any, path: string = '', depth: number = 0) {
    if (depth > 3) return; // Previene ricorsione infinita
    
    const type = typeof value;
    
    if (value === null) {
      console.log(`${path}: null`)
    } else if (Array.isArray(value)) {
      console.log(`${path}: Array[${value.length}]`)
      if (value.length > 0) {
        console.log(`  Tipo del primo elemento: ${typeof value[0]}`)
        if (typeof value[0] === 'object') {
          analyze(value[0], `${path}[0]`, depth + 1)
        }
      }
    } else if (type === 'object') {
      console.log(`${path}: Object`)
      Object.entries(value).forEach(([key, val]) => {
        analyze(val, path ? `${path}.${key}` : key, depth + 1)
      });
    } else {
      console.log(`${path}: ${type} = ${value}`)
    }
  }
  
  analyze(obj)
}

