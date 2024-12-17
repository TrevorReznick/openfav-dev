// Store per l'ultimo messaggio
let lastMessage: any = null;

export async function POST({ request }) {
  try {
    // In Astro, dobbiamo usare Request.text() e poi parsare
    const body = await request.text()
    const payload = JSON.parse(body)
    
    console.log('Webhook from Supabase:', payload)
    
    lastMessage = {
      event: payload.type,
      table: payload.table,
      record: payload.record,
      timestamp: new Date().toISOString()
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    console.error('Webhook error:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

export async function GET() {
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    start(controller) {
      const sendMessage = (data) => {
        const formattedMessage = `data: ${JSON.stringify(data)}\n\n`;
        controller.enqueue(encoder.encode(formattedMessage));
      };

      // Invia un messaggio di connessione iniziale
      sendMessage({ type: 'connected' });

      // Invia l'ultimo messaggio se presente
      if (lastMessage) {
        sendMessage(lastMessage);
      }

      // Imposta un intervallo per l'heartbeat
      const heartbeatInterval = setInterval(() => {
        sendMessage({ type: 'heartbeat', timestamp: new Date().toISOString() });
      }, 30000); // Invia un heartbeat ogni 30 secondi

      // Chiudi il controller dopo 5 minuti (300000 ms) per evitare connessioni aperte indefinitamente
      setTimeout(() => {
        clearInterval(heartbeatInterval);
        controller.close();
      }, 300000);
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