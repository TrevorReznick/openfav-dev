export async function GET(request) {
  const url = new URL(request.url);
  const message = url.searchParams.get('message') || 'Deploy To Koyeb';
  const encoder = new TextEncoder();

  console.log('Server received request. Message:', message);

  const customReadable = new ReadableStream({
    start(controller) {
      // Formatta correttamente il messaggio SSE
      const sendMessage = (msg) => {
        const formattedMessage = `data: ${msg}\n\n`;
        console.log('Sending formatted message:', formattedMessage);
        controller.enqueue(encoder.encode(formattedMessage));
      };

      // Invia il messaggio iniziale
      sendMessage(message);

      // Invia un secondo messaggio di test dopo 2 secondi
      setTimeout(() => {
        sendMessage('Test message after 2 seconds');
      }, 2000);
    },
    cancel() {
      console.log('Stream cancelled');
    }
  });

  return new Response(customReadable, {
    headers: {
      'Connection': 'keep-alive',
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*'
    }
  });
}