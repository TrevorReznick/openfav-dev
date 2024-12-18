export async function POST({ request }) {
    try {
      // Parsing del corpo della richiesta come JSON
      const data = await request.json();
      console.log('Received request data:', data); // Log della richiesta ricevuta
      
      // Estrazione del campo deleted_id dall'oggetto JSON
      const deletedId = data.deleted_id;
      
      if (!deletedId) {
        console.log('Error: deleted_id is required'); // Log dell'errore
        return new Response(JSON.stringify({ error: 'deleted_id is required' }), {
          status: 400,
          headers: {
            'Content-Type': 'application/json'
          }
        });
      }
  
      const message = `Deleted ID: ${deletedId}`;
      console.log('Message to send:', message); // Log del messaggio da inviare
      
      const encoder = new TextEncoder();
      
      // Creazione di un flusso leggibile personalizzato
      const customReadable = new ReadableStream({
        async start(controller) {
          // Emissione di tre notifiche dopo 1 secondo ciascuna
          controller.enqueue(encoder.encode(`data: ${message}\n\n`));
          console.log('Sent message:', message); // Log della prima notifica inviata
          await new Promise((r) => setTimeout(r, 1000));
          
          controller.enqueue(encoder.encode(`data: ${message}\n\n`));
          console.log('Sent message:', message); // Log della seconda notifica inviata
          await new Promise((r) => setTimeout(r, 1000));
          
          controller.enqueue(encoder.encode(`data: ${message}\n\n`));
          console.log('Sent message:', message); // Log della terza notifica inviata
          // Chiusura dello stream dopo l'invio delle tre notifiche
          controller.close();
        },
      });
      
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
    } catch (error) {
      console.error('Error processing request:', error); // Log dell'errore
      return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
  }