// Store per l'ultimo messaggio
let lastMessage: any = null;

export async function POST({ request }) {
  try {
    // In Astro, dobbiamo usare Request.text() e poi parsare
    const body = await request.text();
    const payload = JSON.parse(body);
    
    console.log('Received webhook from Supabase:', payload);
    
    lastMessage = {
      event: payload.type,
      table: payload.table,
      record: payload.record,
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

export async function GET() {
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    start(controller) {
      const sendMessage = (data) => {
        const formattedMessage = `data: ${JSON.stringify(data)}\n\n`;
        controller.enqueue(encoder.encode(formattedMessage));
      };

      sendMessage({ type: 'connected' });

      if (lastMessage) {
        sendMessage(lastMessage);
      }

      setTimeout(() => controller.close(), 30000);
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