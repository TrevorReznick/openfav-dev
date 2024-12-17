import * as store from '~/store'

export async function GET(request) {

  const url = new URL(request.url)

  const message = url.searchParams.get('message') || 'Deploy To Koyeb'

  console.log('SSE caught message:', message)
  const encoder = new TextEncoder()
  
    
  const customReadable = new ReadableStream({
    async start(controller) {
      // Emissione di tre notifiche dopo 1 secondo ciascuna
      controller.enqueue(encoder.encode(`data: ${message}\n\n`));
      console.log('Try sent message:', message)
      console.log('SSE setting store')
      store.messageStore.set(message)
      console.log('store', store.messageStore.get())
      await new Promise((r) => setTimeout(r, 1000))
      
      /*
      controller.enqueue(encoder.encode(`data: ${message}\n\n`))
      console.log('Sent message:', message); // Log della seconda notifica inviata
      await new Promise((r) => setTimeout(r, 1000))
      
      controller.enqueue(encoder.encode(`data: ${message}\n\n`))
      console.log('Sent message:', message) // Log della terza notifica inviata
      */
      // Chiusura dello stream dopo l'invio delle tre notifiche
      controller.close()
    }
  })
  
  // Restituzione della risposta di flusso e mantenimento della connessione attiva
  return new Response(customReadable, {
    // Impostazione delle intestazioni per gli Eventi Server-Sent (SSE)
    headers: {
      Connection: 'keep-alive',
      'Content-Encoding': 'none',
      'Cache-Control': 'no-cache, no-transform',
      'Content-Type': 'text/event-stream; charset=utf-8',
    },
  });
}