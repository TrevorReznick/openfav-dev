// Creiamo uno store semplice per i messaggi dato che non abbiamo un database
let lastMessage: any = null;

// Handler per i webhook di Supabase
export async function POST(request) {
  try {
    const payload = await request.json()
    console.log('Received webhook from Supabase:', payload)
    
    // Salva il messaggio più recente
    lastMessage = {
      event: payload.type,        // insert, update, delete
      table: payload.table,       // nome della tabella
      record: payload.record,     // i dati
      timestamp: new Date().toISOString()
    };

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Webhook error:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

// Handler SSE per i client
export async function GET(request) {
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    start(controller) {
      const sendMessage = (data) => {
        const formattedMessage = `data: ${JSON.stringify(data)}\n\n`
        controller.enqueue(encoder.encode(formattedMessage))
      };

      // Invia il messaggio iniziale
      sendMessage({ type: 'connected' })

      // Se c'è un messaggio precedente, invialo
      if (lastMessage) {
        sendMessage(lastMessage)
      }

      // Chiudi lo stream dopo 30 secondi (puoi aumentare questo tempo)
      setTimeout(() => controller.close(), 30000)
    }
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
      'Access-Control-Allow-Origin': '*'
    }
  });
}